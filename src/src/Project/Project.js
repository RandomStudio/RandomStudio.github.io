import './Project.scss';
import React, { useEffect, useRef, useState } from 'react';

const Project = ({ iss, project }) => {
  const [points, setPoints] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!project || !iss) {
      return;
    }
    const upperBound = Math.pow(10, project.size.toString().length);
    const a = (upperBound - project.size) / upperBound;
    const b = (iss.latitude / 90);
    const c = (iss.longitude / 180);
    const d = (iss.solar_lat / 90);
    const e = (iss.solar_lon / 360);
    setPoints([a, b, c, d, e]);
  }, [iss, project]);

  useEffect(() => {
    if (canvasRef.current && points.length > 0) {
      const [a, b, c, d, e] = points;
      const width = canvasRef.current.clientWidth * (window.devicePixelRatio || 1)
      const height = canvasRef.current.clientHeight * (window.devicePixelRatio || 1)
      canvasRef.current.width = width;
      canvasRef.current.height = height;
      const ctx = canvasRef.current.getContext('2d');
      ctx.fillStyle = 'rgba(0,0,0,0.7)';
      ctx.beginPath();
      ctx.moveTo(a * width, a * height);

      const sets = [
        [b, c],
        [e, d],
        [c, e],
        [c, e],
        [d, b],
        [c, c]
      ];

      sets.forEach(([x, y]) => {
        ctx.lineTo(x * width * Math.random(), y * height * Math.random());
        console.log(x * width * Math.random(), y * height * Math.random())
      });

      ctx.lineTo(a * width, a * height);
      ctx.closePath();
      ctx.fill();
    }
  }, [points])

  return (
    <article className="item">
      <main className="shape">
        <canvas className="canvas" ref={canvasRef}></canvas>
        <div className="seeds">
          <p>Size: {(project.size / 1000).toFixed(2)}MB</p>
          <p>Satellite: ISS</p>
        </div>
      </main>
      <header className="details">
        <a href={project.html_url}>{project.name}</a>
        <p>{project.pushed_at}</p>
        <p>{project.description}</p>
      </header>
    </article>
  );
}

export default Project;
