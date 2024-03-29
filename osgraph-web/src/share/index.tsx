/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { OSGraph } from "../controller";
import { GraphView } from "../components";

const MOCKDAT = {
  nodes: [
    { id: "node0", size: 50 },
    { id: "node1", size: 30 },
    { id: "node2", size: 30 },
    { id: "node3", size: 30 },
    { id: "node4", size: 30, isLeaf: true },
    { id: "node5", size: 30, isLeaf: true },
    { id: "node6", size: 15, isLeaf: true },
    { id: "node7", size: 15, isLeaf: true },
    { id: "node8", size: 15, isLeaf: true },
    { id: "node9", size: 15, isLeaf: true },
    { id: "node10", size: 15, isLeaf: true },
    { id: "node11", size: 15, isLeaf: true },
    { id: "node12", size: 15, isLeaf: true },
    { id: "node13", size: 15, isLeaf: true },
    { id: "node14", size: 15, isLeaf: true },
    { id: "node15", size: 15, isLeaf: true },
    { id: "node16", size: 15, isLeaf: true },
  ],
  edges: [
    { source: "node0", target: "node1", label: "test" },
    { source: "node0", target: "node2" },
    { source: "node0", target: "node3" },
    { source: "node0", target: "node4" },
    { source: "node0", target: "node5" },
    { source: "node1", target: "node6" },
    { source: "node1", target: "node7" },
    { source: "node2", target: "node8" },
    { source: "node2", target: "node9" },
    { source: "node2", target: "node10" },
    { source: "node2", target: "node11" },
    { source: "node2", target: "node12" },
    { source: "node2", target: "node13" },
    { source: "node3", target: "node14" },
    { source: "node3", target: "node15" },
    { source: "node3", target: "node16", type: "quadratic" },
    { source: "node16", target: "node3", type: "quadratic" },
  ],
};

export default () => {
  return (
    <OSGraph>
      <div
        className="graph-container"
        css={css`
          height: 100vh;
        `}
      >
        <GraphView data={MOCKDAT} />
      </div>
    </OSGraph>
  );
};