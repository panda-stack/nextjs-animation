const robotId = ['robot1', 'robot2'];

const robotClass = ['lottie1', 'lottie2'];

let x = 0, y = 100, dir = 1;

let animating = 0;

export function robot() {
  for (let i = 0; i<2; i++){
    const el = document.getElementById(robotId[i]);
    el.className += robotClass[i];
  }   
  create_stand_robot();
  robot_animation("fly", 1); 
};

function create_stand_robot() {
  let imagediv = document.createElement("div");
  imagediv.id = "stand_robot_div";
  imagediv.style.position = "absolute";
  imagediv.style.height = 300 + "px";
  imagediv.style.width = 300 + "px";
  imagediv.style.zIndex= 1;
  imagediv.style.zoom = 100 + "%";  
  imagediv.style.visibility = "hidden";
  let container = document.getElementById('__next');
  container.appendChild(imagediv);

  let imagefile = document.createElement("img");
  imagefile.src = "./images/robot_merged.png";
  imagefile.id = 'stand_robot';
  imagefile.style.width = "60%";
  imagefile.style.height = "81%";
  imagefile.style.position = 'absolute';
  imagefile.style.left = "28%";
  imagefile.style.top = "63px";
  let container2 = document.getElementById('stand_robot_div');
  container2.appendChild(imagefile);
}

function show(rightX, bottomY, id) {
  document.getElementById(id).style.visibility = "visible";
  setposition(rightX, bottomY, id);
}

function hide(id) {
  document.getElementById(id).style.visibility = "hidden";
}

function robot_animation(animate, n) {
  hide('stand_robot_div');
  if (animate === "fly") {
    fly_robot1_once(n);
    show(x, y, 'robot1');    
    hide('robot2');
  }
  if (animate === "talk") {
    hide('robot1');
    show(x, y, 'robot2');
    setTimeout(function() {
      hide('robot2');
    }, 4000);
  }
}

function setposition(right, bottom, idname) {
  const el = document.getElementById(idname);
  el.style.right = `${right}px`;
  el.style.bottom = `${bottom}px`;
}

function fly_robot1_once(n) {
  const w = window.innerWidth;
  const h = window.innerHeight;
  let r = (w - 300) / 2, alpha = 3.14159 / 100;

  let nx = 0;

  animating = 1;

  const idVar = setInterval(() => {
    timer();
  }, 40);

  function timer() {
    if (nx < 100) {
      if (dir === 1) {
        x = r - r * Math.cos(alpha * nx);
        y = 100 + Math.sin(alpha * nx) * (h - 400);
        nx += 1;
      } else {
        x = r - r * Math.cos(alpha * (100 - nx));
        y = 100 + Math.sin(alpha * nx) * (h - 400);
        nx += 1;
      }
    } else {
      clearInterval(idVar);
      if (dir === 1) dir = 0;
      else dir = 1;     
      setTimeout(function() {
        if(n > 0) {
          robot_animation("talk");
          setTimeout(function() {
            hide('robot1');
            hide('robot2');
            change_btn_name();
          }, 4000);
        } 
        else {
          show(x, y, 'stand_robot_div');
          setTimeout(function() {
            hide('stand_robot_div');
          }, 4000);
          hide('robot1');
        } 
        animating = 0;
      }, 300);
      nx = 0;
    }
    setposition(x, y, 'robot1');
  }
}

function fly_robot1_loop() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  let x = 0, y = 100;
  let r = (w - 300) / 2, alpha = 3.14159 / 100;

  let nx = 0;

  const idVar = setInterval(() => {
    timer();
  }, 40);

  function timer() {
    if (nx < 100) {
      x = r - r * Math.cos(alpha * nx);
      y = 100 + Math.sin(alpha * nx) * (h - 400);
      nx += 1;
    } else if (nx < 200) {
      x = r - r * Math.cos(alpha * (200 - nx));
      y = 100 + Math.sin(alpha * (200 - nx)) * (h - 400);
      nx += 1;
    } else {
      nx = 0;
      x = 0;
      y = 100;
    }
    setposition(x, y, 'robot1');
  }
}

export const Animation_btn = (btnnum) => {  
  if(animating > 0) return;
  if (btnnum == 0) robot_animation("fly", 0);
  else if(btnnum == 1) robot_animation("talk");
  else return;
}

function change_btn_name() {
  document.getElementById('btn0').innerHTML = "Fly";
  document.getElementById('btn1').innerHTML = "Talk";
}