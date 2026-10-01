const { useState: usePBN } = React;

function PBAccordion({ items }) {
  const [open, setOpen] = usePBN(null);
  return (
    <div className="pbn-accordion">
      {items.map((it, i) => (
        <div key={i} className={`card pbn-acc-row ${open === i ? "open" : ""}`} onClick={() => setOpen(open === i ? null : i)}>
          <div className="pbn-acc-head"><h4><span className="pbn-slide-count">{i + 1}/{items.length}</span> {it.h}</h4><span className="pbn-chev">{open === i ? "\u2212" : "+"}</span></div>
          <p className={`pbn-acc-body${open === i ? "" : " pbn-hide"}`}>{it.p}</p>
        </div>
      ))}
    </div>
  );
}

function PBSlider({ items }) {
  const [i, setI] = usePBN(0);
  const it = items[i];
  return (
    <div className="card pbn-slider">
      {items.map((x, k) => (
        <div key={k} className={k === i ? "" : "pbn-hide"}>
          <h4 className="pbn-slide-h"><span className="pbn-slide-count">{k + 1}/{items.length}</span> {x.h}</h4>
          <p>{x.p}</p>
        </div>
      ))}
      <div className="pbn-slide-nav">
        <button onClick={() => setI((i - 1 + items.length) % items.length)} aria-label="Previous slide">Previous</button>
        <button onClick={() => setI((i + 1) % items.length)} aria-label="Next slide">Next</button>
      </div>
    </div>
  );
}

function PBTabs({ items }) {
  const [i, setI] = usePBN(0);
  return (
    <div className="pbn-tabs-wrap">
      <div className="pbn-tabs">
        {items.map((_, idx) => (
          <button key={idx} className={`pbn-tab ${idx === i ? "active" : ""}`} onClick={() => setI(idx)}>{idx + 1}</button>
        ))}
      </div>
      {items.map((x, k) => <div key={k} className={`card pbn-tab-panel${k === i ? "" : " pbn-hide"}`}><h4><span className="pbn-slide-count">{k + 1}/{items.length}</span> {x.h}</h4><p>{x.p}</p></div>)}
    </div>
  );
}

function PBTruncated({ items }) {
  const [openSet, setOpenSet] = usePBN({});
  return (
    <div className="pbn-trunc-list">
      {items.map((it, i) => {
        const open = !!openSet[i];
        const long = it.p.length > 90;
        const short = long ? it.p.slice(0, 90) + "\u2026" : it.p;
        return (
          <div key={i} className="card">
            <h4><span className="pbn-slide-count">{i + 1}/{items.length}</span> {it.h}</h4>
            <p>{long ? <>{it.p.slice(0, 90)}<span className={open ? "" : "pbn-hide"}>{it.p.slice(90)}</span>{!open && "\u2026"}</> : it.p}</p>
            {long && <button className="pbn-readmore" onClick={() => setOpenSet(s => ({ ...s, [i]: !s[i] }))}>{open ? "Show less" : "Read more"}</button>}
          </div>
        );
      })}
    </div>
  );
}

function PBSlideAccordion({ items }) {
  const [i, setI] = usePBN(0);
  const [open, setOpen] = usePBN(false);
  const go = d => { setI((i + d + items.length) % items.length); setOpen(false); };
  const it = items[i];
  return (
    <div className="card pbn-sacc">
      <div className="pbn-sacc-top">
        <span className="pbn-slide-num">{i + 1} / {items.length}</span>
        <div className="pbn-slide-nav">
          <button onClick={() => go(-1)} aria-label="Previous slide">Previous</button>
          <button onClick={() => go(1)} aria-label="Next slide">Next</button>
        </div>
      </div>
      {items.map((x, k) => (
        <div key={k} className={k === i ? "" : "pbn-hide"}>
          <button className="pbn-sacc-h" onClick={() => setOpen(o => !o)} aria-expanded={k === i && open}>
            <span><span className="pbn-slide-count">{k + 1}/{items.length}</span> {x.h}</span>
            <span className="pbn-chev">{k === i && open ? "−" : "+"}</span>
          </button>
          <p className={`pbn-sacc-body${k === i && open ? "" : " pbn-hide"}`}>{x.p}</p>
        </div>
      ))}
    </div>
  );
}

function PBQuote({ q, who, src }) {
  return (
    <figure className="pb-quote">
      <span className="pb-quote-mark" aria-hidden="true">“</span>
      <blockquote>{q}</blockquote>
      <figcaption><strong>{who}</strong>{src ? <span>{src}</span> : null}</figcaption>
    </figure>
  );
}

Object.assign(window, { PBAccordion, PBSlider, PBTabs, PBTruncated, PBSlideAccordion, PBQuote });
