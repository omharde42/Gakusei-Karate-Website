import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 1, 1000);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Create karate-themed 3D objects
    const geometries: THREE.Mesh[] = [];

    // Create floating kanji characters as 3D extruded shapes
    const kanjiShapes = [
      { char: '空', color: 0xdc2626 }, // Red - "Kara" (Empty)
      { char: '手', color: 0xfbbf24 }, // Gold - "Te" (Hand)
      { char: '道', color: 0x1e3a8a }, // Navy - "Do" (Way)
    ];

    kanjiShapes.forEach((kanji, index) => {
      const geometry = new THREE.BoxGeometry(3, 3, 0.5);
      const material = new THREE.MeshPhongMaterial({
        color: kanji.color,
        shininess: 100,
        specular: 0xffffff,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = (index - 1) * 15;
      mesh.position.y = Math.random() * 10 - 5;
      mesh.position.z = Math.random() * 20 - 10;
      scene.add(mesh);
      geometries.push(mesh);
    });

    // Add more geometric shapes representing karate forms
    for (let i = 0; i < 30; i++) {
      const geometry = Math.random() > 0.5 
        ? new THREE.TetrahedronGeometry(Math.random() * 2 + 0.5)
        : new THREE.OctahedronGeometry(Math.random() * 1.5 + 0.5);
      
      const material = new THREE.MeshPhongMaterial({
        color: [0xdc2626, 0xfbbf24, 0x1e3a8a][Math.floor(Math.random() * 3)],
        shininess: 100,
        wireframe: Math.random() > 0.7,
        transparent: true,
        opacity: 0.6,
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = (Math.random() - 0.5) * 100;
      mesh.position.y = (Math.random() - 0.5) * 100;
      mesh.position.z = (Math.random() - 0.5) * 100;
      
      scene.add(mesh);
      geometries.push(mesh);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xfbbf24, 0.8);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xdc2626, 0.6);
    directionalLight2.position.set(-5, -5, 5);
    scene.add(directionalLight2);

    const pointLight = new THREE.PointLight(0x1e3a8a, 1, 100);
    pointLight.position.set(0, 0, 20);
    scene.add(pointLight);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Rotate and move all geometries
      geometries.forEach((mesh, index) => {
        mesh.rotation.x += 0.001 * (index % 3 + 1);
        mesh.rotation.y += 0.002 * (index % 3 + 1);
        
        // Floating animation
        mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
        
        // Move based on mouse position
        mesh.position.x += (mouseX * 5 - mesh.position.x) * 0.001;
        mesh.position.y += (mouseY * 5 - mesh.position.y) * 0.001;
      });

      // Camera rotation
      camera.position.x += (mouseX * 10 - camera.position.x) * 0.02;
      camera.position.y += (mouseY * 10 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-20"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ThreeBackground;
