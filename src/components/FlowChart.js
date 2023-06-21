import React, { useEffect, useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import CustomCardDesign from './CustomCardDesign';
import brazil from '../assets/brazil-icon.svg';
import usa from '../assets/usa-icon.svg';
import italy from '../assets/italy-icon.svg';
import Img1 from '../assets/img-2.svg';
import Img2 from '../assets/img-3.svg';
import Img3 from '../assets/img-4.svg';
import Img4 from '../assets/img-5.svg';
import Img5 from '../assets/img-6.svg';
import Img6 from '../assets/img-7.svg';
import Img7 from '../assets/img-8.svg';
import Img8 from '../assets/img-9.svg';
import Img9 from '../assets/img-10.svg';
import Img10 from '../assets/img-11.svg';

const CustomNodeFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const nodeTypes = {
    selectorNode: CustomCardDesign,
  };

  useEffect(() => {
    setNodes([
      {
        id: '1',
        type: 'selectorNode',
        data: { label: 'Seth Williams' },
        position: { x: 700, y: -200 },
        sourcePosition: 'bottom',
      },
      {
        id: '2',
        type: 'selectorNode',
        data: { label: 'Dan Morgan', img: Img1 },
        position: { x: 700, y: 400 },
        sourcePosition: 'bottom',
      },
      {
        id: '3',
        type: 'selectorNode',
        data: { label: 'Ramon Harris', img: Img2 },
        position: { x: 300, y: 400 },
        sourcePosition: 'bottom',
      },
      {
        id: '4',
        type: 'selectorNode',
        data: { label: 'Janet Parks', retail: true, img: Img3 },
        position: { x: 100, y: 700 },
        sourcePosition: 'bottom',
      },
      {
        id: '5',
        type: 'selectorNode',
        data: { label: 'Isabelle Kaif', retail: true, img: Img4 },
        position: { x: 350, y: 700 },
        sourcePosition: 'bottom',
      },
      {
        id: '6',
        type: 'selectorNode',
        data: { label: 'Ivan Toney', retail: true, img: Img5 },
        position: { x: 600, y: 700 },
        sourcePosition: 'bottom',
      },
      {
        id: '7',
        type: 'selectorNode',
        data: { label: 'Sabrina Francis', retail: true, img: Img6 },
        position: { x: 850, y: 700 },
        sourcePosition: 'bottom',
      },
      {
        id: '8',
        type: 'selectorNode',
        data: { label: 'Dave Cooper', img: Img10 },
        position: { x: 1200, y: 0 },
        sourcePosition: 'bottom',
      },
      {
        id: '9',
        type: 'selectorNode',
        data: { label: 'Stella Nelson', img: Img7 },
        position: { x: 1100, y: 400 },
        sourcePosition: 'bottom',
      },
      {
        id: '10',
        type: 'selectorNode',
        data: { label: 'Miles Clark', retail: true, img: Img9 },
        position: { x: 1100, y: 700 },
        sourcePosition: 'bottom',
      },
      {
        id: '11',
        type: 'selectorNode',
        data: { label: 'Angela Howard', retail: true, img: Img8 },
        position: { x: 1350, y: 700 },
        sourcePosition: 'bottom',
      },
      {
        id: '12',
        type: 'selectorNode',
        data: { label: 'Brazil', Location: true, img: brazil },
        position: { x: 1200, y: 200 },
        sourcePosition: 'bottom',
      },
      {
        id: '13',
        type: 'selectorNode',
        data: { label: 'USA', Location: true, img: usa },
        position: { x: 400, y: 200 },
        sourcePosition: 'bottom',
      },
      {
        id: '14',
        type: 'selectorNode',
        data: { label: 'Italy', Location: true, img: italy },
        position: { x: 800, y: 200 },
        sourcePosition: 'bottom',
      },
    ]);

    setEdges([
      {
        id: 'e1a-12',
        source: '1',
        target: '12',
        style: { stroke: '#000' },
      },
      {
        id: 'e1b-14',
        source: '1',
        target: '14',
        style: { stroke: '#000' },
      },
      {
        id: 'e2-14',
        source: '14',
        target: '2',
        style: { stroke: '#000' },
      },
      {
        id: 'e1c-13',
        source: '1',
        target: '13',
        style: { stroke: '#000' },
      },
      {
        id: 'e3-13',
        source: '13',
        target: '3',
        style: { stroke: '#000' },
      },

      {
        id: 'e1c-8',
        source: '1',
        target: '8',
        style: { stroke: '#000' },
      },
      {
        id: 'e3b-4',
        source: '3',
        target: '4',
        style: { stroke: '#000' },
      },
      {
        id: 'e3b-5',
        source: '3',
        target: '5',
        style: { stroke: '#000' },
      },
      {
        id: 'e2b-6',
        source: '2',
        target: '6',
        style: { stroke: '#000' },
      },
      {
        id: 'e2b-7',
        source: '2',
        target: '7',
        style: { stroke: '#000' },
      },
      {
        id: 'e12-9',
        source: '12',
        target: '9',
        style: { stroke: '#000' },
      },
      {
        id: 'e9a-10',
        source: '9',
        target: '10',
        style: { stroke: '#000' },
      },
      {
        id: 'e9a-11',
        source: '9',
        target: '11',
        style: { stroke: '#000' },
      },
    ]);
  }, []);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#000' } }, eds)), []);
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView></ReactFlow>
  );
};

export default CustomNodeFlow;
