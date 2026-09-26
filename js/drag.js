// Shared touch/mouse drag helper used by the order and jigsaw games.
// Moves the real element with a CSS transform (GPU-accelerated, no layout
// thrash) instead of cloning a ghost node and writing left/top every frame —
// the old approach visibly lagged on real phones. pointermove updates are
// batched to one per animation frame so fast finger movement can't flood
// the main thread with style writes.

export function makeDraggable(el, { canDrag = () => true, onDrop } = {}) {
  el.style.touchAction = "none";

  el.addEventListener("pointerdown", (e) => {
    if (!canDrag()) return;
    e.preventDefault();

    const rect = el.getBoundingClientRect();
    const startLeft = rect.left;
    const startTop = rect.top;
    const startX = e.clientX;
    const startY = e.clientY;

    const originalStyle = {
      position: el.style.position,
      left: el.style.left,
      top: el.style.top,
      width: el.style.width,
      height: el.style.height,
      margin: el.style.margin,
      zIndex: el.style.zIndex,
      transform: el.style.transform,
    };

    el.style.position = "fixed";
    el.style.left = startLeft + "px";
    el.style.top = startTop + "px";
    el.style.width = rect.width + "px";
    el.style.height = rect.height + "px";
    el.style.margin = "0";
    el.style.zIndex = "200";
    el.classList.add("drag-active");

    let dx = 0, dy = 0, raf = null;
    const applyTransform = () => {
      el.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(1.08)`;
      raf = null;
    };
    const onMove = (ev) => {
      dx = ev.clientX - startX;
      dy = ev.clientY - startY;
      if (raf === null) raf = requestAnimationFrame(applyTransform);
    };

    const restore = () => {
      el.classList.remove("drag-active");
      el.style.position = originalStyle.position;
      el.style.left = originalStyle.left;
      el.style.top = originalStyle.top;
      el.style.width = originalStyle.width;
      el.style.height = originalStyle.height;
      el.style.margin = originalStyle.margin;
      el.style.zIndex = originalStyle.zIndex;
      el.style.transform = originalStyle.transform;
    };

    const onUp = (ev) => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointercancel", onUp);
      if (raf !== null) cancelAnimationFrame(raf);

      // Hide the dragged element just long enough to see what's beneath it.
      el.style.visibility = "hidden";
      const target = document.elementFromPoint(ev.clientX, ev.clientY);
      el.style.visibility = "visible";

      onDrop(target, restore);
    };

    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);
    document.addEventListener("pointercancel", onUp);
  });
}
