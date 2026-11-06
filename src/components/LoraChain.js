import React, { useEffect, useRef, useState } from "react";

// Diagram of the real network, built from HTML so it stays readable at any
// width. A marker travels the chain once when the diagram first comes into view.
export default function LoraChain({ project }) {
  const chainRef = useRef(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(chainRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className="lora">
      <ol ref={chainRef} className={`lora-chain${live ? " is-live" : ""}`}>
        {project.nodes.map((node) => (
          <li key={node.name} className="lora-node">
            <span className="lora-node-name">{node.name}</span>
            <strong>{node.role}</strong>
            <span className="lora-node-detail">{node.detail}</span>
          </li>
        ))}
        <li className="lora-packet" aria-hidden="true" />
      </ol>

      <figcaption>{project.caption}</figcaption>

      <div className="lora-evidence">
        <div>
          <table className="radio-table">
            <caption>Radio settings tested</caption>
            <thead>
              <tr>
                <th scope="col">Test</th>
                <th scope="col">Spreading factor</th>
                <th scope="col">Coding rate</th>
              </tr>
            </thead>
            <tbody>
              {project.tests.map((row) => (
                <tr key={row.test}>
                  <td>{row.test}</td>
                  <td>{row.sf}</td>
                  <td>{row.cr}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="lora-note">{project.testsNote}</p>
        </div>
        <div>
          <p className="lora-evidence-title">From the published logs</p>
          <code className="log-line">{project.logLine}</code>
          <p className="lora-note">{project.logSource}</p>
        </div>
      </div>
    </figure>
  );
}
