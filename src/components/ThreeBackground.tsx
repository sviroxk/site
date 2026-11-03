import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current?.appendChild(renderer.domElement);

    // Звезды
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 2000;
    const posArray = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const starsMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x00ff88,
      transparent: true,
      opacity: 0.8,
    });
    const starsMesh = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starsMesh);

    // Неоновая спираль
    const spiralGeometry = new THREE.BufferGeometry();
    const spiralPoints = [];
    for (let i = 0; i < 500; i++) {
      const t = i / 500 * Math.PI * 4;
      const r = (i / 500) * 20;
      const x = Math.cos(t) * r;
      const y = Math.sin(t) * r;
      const z = (i / 500) * 5;
      spiralPoints.push(x, y, z);
    }
    spiralGeometry.setAttribute('position', new THREE.Float32BufferAttribute(spiralPoints, 3));
    const spiralMaterial = new THREE.LineBasicMaterial({ color: 0xff6b6b });
    const spiralMesh = new THREE.LineSegments(spiralGeometry, spiralMaterial);
    scene.add(spiralMesh);

    // Планетка
    const planetGeometry = new THREE.SphereGeometry(3, 32, 32);
    const planetMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0.3,
    });
    const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
    planetMesh.position.set(10, 5, -5);
    scene.add(planetMesh);

    camera.position.z = 30;

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX / window.innerWidth - 0.5;
      mouseY = event.clientY / window.innerHeight - 0.5;
    };

    document.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      // Вращение звезд
      starsMesh.rotation.y += 0.001;
      starsMesh.rotation.x += 0.0005;

      // Вращение спирали
      spiralMesh.rotation.y += 0.002;
      spiralMesh.rotation.z += 0.001;

      // Планетка
      planetMesh.rotation.y += 0.005;
      planetMesh.rotation.z += 0.002;

      // Реакция на мышь
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

export default ThreeBackground;