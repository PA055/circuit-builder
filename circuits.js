interact('.component').draggable({
    listeners: {
      start (event) {
        console.log(event.type, event.target)
      },
      move (event) {
        event.target.querySelectorAll("p.x").html = event.target.querySelectorAll("p.x").html + event.dx;
        event.target.querySelectorAll("p.y").html = event.target.querySelectorAll("p.y").html + event.dy;
  
        event.target.style.transform = `translate(${event.target.querySelectorAll("p.x").html}px, ${event.target.querySelectorAll("p.y").html}px)`;
      },
    }
  })