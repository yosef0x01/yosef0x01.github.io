// MIXED — single post detail page
// Re-uses M_BASE, M_IK, M_THEMES, M_SEV_BG from mixed.jsx (loaded first).

function MixedPost({slug = 'CVE-2023-0669'}) {
  const post = M_POSTS.find(p => p.cve === slug) || M_POSTS[0];

  const [bodyHtml, setBodyHtml] = React.useState('<p style="opacity:0.6">Loading post…</p>');
  React.useEffect(() => {
    if (!post.file) return;
    const RAW = 'https://raw.githubusercontent.com/yosef0x01/yosef0x01.github.io/master/_posts/';
    setBodyHtml('<p style="opacity:0.6">Loading post…</p>');
    // local posts/ first (for self-hosted deploy), fall back to live repo
    fetch('posts/' + post.file)
      .then(r => r.ok ? r.text() : Promise.reject())
      .catch(() => fetch(RAW + post.file).then(r => r.text()))
      .then(txt => {
        const m = txt.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
        const md = m ? m[2] : txt;
        if (typeof marked !== 'undefined') {
          setBodyHtml(marked.parse(md));
        } else {
          setBodyHtml('<pre>' + md.replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])) + '</pre>');
        }
      })
      .catch(e => setBodyHtml('<p style="color:#ef4444">Failed to load: ' + e.message + '</p>'));
  }, [post.file]);
  const T = M_THEMES.yosef;
  const isLight = false;

  const css = `
    .p{background:${T.bg};color:${T.fg};font-family:"Inter","IBM Plex Sans",-apple-system,sans-serif;min-height:100%;width:100%;box-sizing:border-box;line-height:1.7;transition:background .25s,color .25s}
    .p a{color:${T.accent};text-decoration:none;border-bottom:1px solid ${T.rule2}}
    .p a:hover{border-bottom-color:${T.accent}}

    .p-themes{position:fixed;top:16px;right:16px;display:flex;gap:6px;z-index:20;background:${T.panel};border:1px solid ${T.rule};padding:6px;border-radius:99px;box-shadow:0 4px 16px rgba(0,0,0,${isLight?'0.08':'0.4'})}
    .p-swatch{width:22px;height:22px;border-radius:50%;cursor:pointer;border:2px solid transparent;transition:transform .12s,border-color .12s}
    .p-swatch:hover{transform:scale(1.1)}
    .p-swatch.on{border-color:${T.fg}}

    .p-nav{background:${T.nav};border-bottom:1px solid ${T.rule};padding:18px 48px;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;z-index:10}
    .p-brand{display:flex;align-items:center;gap:12px}
    .p-mark{width:34px;height:34px;border:${M_AVATAR?'none':`1.5px solid ${T.accent}`};display:flex;align-items:center;justify-content:center;font-family:"IBM Plex Mono",monospace;font-weight:600;font-size:13px;color:${T.accent};border-radius:${M_AVATAR?'50%':'4px'};letter-spacing:-0.02em;overflow:hidden}
    .p-mark img,.p-avatar img{width:100%;height:100%;object-fit:cover;display:block}
    .p-name{font-family:"IBM Plex Mono",monospace;font-size:15px;font-weight:500;letter-spacing:-0.01em;color:${T.fg}}
    .p-name span.dot{color:${T.accent}}
    .p-name .cur{color:${T.accent};animation:p-blink 1.1s steps(2) infinite;margin-left:2px}
    @keyframes p-blink{50%{opacity:0}}
    .p-tag{font-size:11px;color:${T.dim};margin-top:2px;letter-spacing:0.02em}
    .p-links{display:flex;gap:28px;font-size:13px;color:${T.muted};font-weight:500}
    .p-links a{color:${T.muted};border:none;cursor:pointer;transition:color .12s;position:relative;padding-bottom:4px;text-decoration:none}
    .p-links a:hover{color:${T.fg}}
    .p-cta{background:${T.accent};color:${T.accentInk};padding:8px 16px;border-radius:4px;font-size:12px;font-weight:600;font-family:"IBM Plex Mono",monospace;border:none;text-decoration:none}

    .p-crumb{max-width:840px;margin:48px auto 0;padding:0 32px;font-family:"IBM Plex Mono",monospace;font-size:11px;color:${T.dim};letter-spacing:0.08em;text-transform:uppercase}
    .p-crumb a{color:${T.muted};border:none}
    .p-crumb a:hover{color:${T.accent}}

    .p-head{max-width:840px;margin:24px auto 0;padding:0 32px}
    .p-pills{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:20px}
    .p-pill{font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:0.16em;font-weight:600;padding:5px 10px;border-radius:3px;color:#fff}
    .p-brick{font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:0.14em;font-weight:700;padding:5px 10px;border-radius:3px;color:#0d0d0d}
    .p-cve{font-family:"IBM Plex Mono",monospace;font-size:12px;color:${T.accent};letter-spacing:0.12em;font-weight:600}
    .p-h{font-size:44px;line-height:1.1;letter-spacing:-0.025em;font-weight:700;margin:18px 0 24px;text-wrap:balance;color:${T.fg}}
    .p-meta{display:flex;align-items:center;gap:14px;padding:18px 0 24px;border-top:1px solid ${T.rule};border-bottom:1px solid ${T.rule};font-size:13px;color:${T.muted};font-family:"IBM Plex Mono",monospace}
    .p-meta b{color:${T.fg};font-weight:500}
    .p-avatar{width:32px;height:32px;border-radius:50%;background:${T.accent};display:flex;align-items:center;justify-content:center;font-family:"IBM Plex Mono",monospace;font-weight:600;font-size:11px;color:${T.accentInk}}

    .p-cover{max-width:1080px;margin:32px auto;height:380px;border-radius:10px;background-size:cover;background-position:center;border:1px solid ${T.rule};position:relative;overflow:hidden}
    .p-cover::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 60%,rgba(0,0,0,0.3) 100%)}

    .p-body{max-width:780px;margin:0 auto;padding:24px 32px 80px;font-family:"Source Serif Pro","Source Serif 4",Georgia,serif;font-size:18px;line-height:1.75;color:${T.fg}}
    .p-body img{max-width:100%;height:auto;border-radius:6px;margin:24px 0;border:1px solid ${T.rule}}
    .p-body a{color:${T.accent};border-bottom:1px solid ${T.rule2}}
    .p-body a:hover{border-bottom-color:${T.accent}}
    .p-body strong, .p-body b{color:${T.fg};font-weight:600}
    .p-body hr{border:none;border-top:1px solid ${T.rule};margin:36px 0}
    .p-body table{width:100%;border-collapse:collapse;margin:24px 0;font-family:"Inter",sans-serif;font-size:14px}
    .p-body th, .p-body td{padding:10px 14px;border:1px solid ${T.rule};text-align:left}
    .p-body th{background:${T.panel};color:${T.fg};font-weight:600}
    .p-body h2{font-family:"Inter",sans-serif;font-size:26px;line-height:1.2;font-weight:600;letter-spacing:-0.02em;margin:48px 0 18px;color:${T.fg}}
    .p-body h3{font-family:"Inter",sans-serif;font-size:19px;line-height:1.3;font-weight:600;margin:36px 0 12px;color:${T.fg}}
    .p-body p{margin:0 0 20px;color:${T.fg};text-wrap:pretty}
    .p-body p.dek{font-size:21px;line-height:1.55;color:${T.muted};font-style:italic;margin-bottom:32px}
    .p-body ul{margin:0 0 24px;padding-left:24px;color:${T.fg}}
    .p-body li{margin:0 0 8px}
    .p-body code{font-family:"IBM Plex Mono",monospace;font-size:14px;background:${T.panel};padding:2px 7px;border-radius:3px;color:${T.accent};border:1px solid ${T.rule}}
    .p-body pre{font-family:"IBM Plex Mono",monospace;font-size:13.5px;line-height:1.6;background:${T.panel};border:1px solid ${T.rule};border-left:3px solid ${T.accent};padding:18px 22px;border-radius:6px;overflow-x:auto;margin:24px 0;color:${T.fg}}
    .p-body pre code{background:transparent;border:none;padding:0;color:inherit;font-size:13.5px}
    .p-body blockquote{margin:24px 0;padding:14px 20px;border-left:3px solid ${T.accent};background:${T.panel};color:${T.muted};font-style:italic;border-radius:0 6px 6px 0}
    .p-body .callout{margin:24px 0;padding:16px 20px;background:${T.panel};border:1px solid ${T.rule};border-radius:6px;font-family:"Inter",sans-serif;font-style:normal;font-size:14.5px;line-height:1.6}
    .p-body .callout b{color:${T.accent};font-family:"IBM Plex Mono",monospace;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;display:block;margin-bottom:6px}

    .p-tags-foot{max-width:740px;margin:48px auto 0;padding:32px;border-top:1px solid ${T.rule};display:flex;gap:10px;flex-wrap:wrap;font-family:"IBM Plex Mono",monospace;font-size:11px;color:${T.muted};letter-spacing:0.08em;text-transform:uppercase}
    .p-tags-foot span{padding:5px 12px;border:1px solid ${T.rule};border-radius:99px}

    .p-foot{background:${T.nav};border-top:1px solid ${T.rule};padding:36px 48px;margin-top:32px;font-family:"IBM Plex Mono",monospace;font-size:11px;color:${T.dim};letter-spacing:0.06em;display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px}
    .p-foot .roman{color:${T.accent}}
  `;

  return (
    <div className="p">
      <style>{css}</style>

      <div className="p-nav">
        <div className="p-brand">
          <div className="p-mark">{M_AVATAR ? <img src={M_AVATAR} alt="yosef0x1" onError={(e)=>{e.target.style.display='none';e.target.parentNode.textContent='y0';}} /> : 'y0'}</div>
          <div>
            <div className="p-name">yosef0x1<span className="cur">▌</span></div>
            <div className="p-tag">vulnerability research · exploit development</div>
          </div>
        </div>
        <div className="p-links">
          <a href="mixed-demo.html">Home</a>
          <a href="about-demo.html">About</a>
          <a href="contact-demo.html">Contact</a>
        </div>
        <a className="p-cta" href={M_BASE + '/feed.xml'}>RSS →</a>
      </div>

      <div className="p-crumb">
        <a href="mixed-demo.html">← All writeups</a>
      </div>

      <div className="p-head">
        <div className="p-pills">
          <span className="p-pill" style={{background:post.tagColor}}>{post.tag}</span>
          <span className="p-brick" style={{background:M_SEV_BG[post.sev]}}>{post.sev}</span>
          <span className="p-cve">{post.cve}</span>
        </div>
        <h1 className="p-h">{post.title}</h1>
        <div className="p-meta">
          <span className="p-avatar">{M_AVATAR ? <img src={M_AVATAR} alt="yosef0x1" onError={(e)=>{e.target.style.display='none';e.target.parentNode.textContent='y0';}} /> : 'y0'}</span>
          <b>yosef0x1</b>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.read} read</span>
          <span style={{marginLeft:'auto',color:T.dim}}>Originally posted on yosef0x1.com</span>
        </div>
      </div>

      <div
        className="p-cover"
        style={post.img ? {backgroundImage: `url(${post.img})`} : {background: post.cover}}
      />

      <div className="p-body" dangerouslySetInnerHTML={{__html: bodyHtml}} />

      <div style={{maxWidth:1080,margin:'0 auto',padding:'0 32px'}}>
        <h2 style={{fontFamily:'Inter,sans-serif',fontSize:14,letterSpacing:'0.14em',textTransform:'uppercase',color:T.muted,margin:'40px 0 18px',fontWeight:500}}>// related writeups</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:18}}>
          {M_POSTS.filter(p => p.cve !== post.cve).slice(0,3).map(p => (
            <a key={p.id} href={'post-demo.html?cve=' + p.cve} style={{display:'block',padding:'18px 20px',border:`1px solid ${T.rule}`,borderRadius:8,background:T.panel,color:T.fg,textDecoration:'none',transition:'border-color .15s'}}>
              <div style={{fontFamily:'"IBM Plex Mono",monospace',fontSize:10,color:T.accent,letterSpacing:'0.12em',fontWeight:600,marginBottom:6}}>{p.cve}</div>
              <div style={{fontSize:14.5,fontWeight:500,lineHeight:1.35,color:T.fg}}>{p.title}</div>
              <div style={{fontFamily:'"IBM Plex Mono",monospace',fontSize:11,color:T.dim,marginTop:8}}>{p.date} · {p.read}</div>
            </a>
          ))}
        </div>
      </div>

      <div className="p-tags-foot">
        <span>#{post.tag.toLowerCase().replace(' ', '-')}</span>
        <span>#{post.sev.toLowerCase()}</span>
        <span>#{post.cve.toLowerCase()}</span>
        <span>#disclosure</span>
      </div>

      <div className="p-foot">
        <span>© 2026 yosef0x1 · all research for educational purposes</span>
        <span className="roman">MMXXVI · PGP 0x4F3A · ed25519</span>
      </div>
    </div>
  );
}
window.MixedPost = MixedPost;
