// MIXED — D1 layout × D3 personality × D2 typographic accent
// Real yosef0x1.com data. Live links. vsociety cover images.

const M_BASE = 'https://yosef0x1.com';
// Profile picture — set to an image URL/path to show a photo; null keeps the y0 monogram.
const M_AVATAR = 'assets/avatar.jpg';
const M_IK   = 'https://ik.imagekit.io/14sfaswy6hrz';

const M_POSTS = [
  { id: 1, sev: 'CRIT', tag: 'CRITICAL RCE', tagColor: '#ef4444', title: 'Unauthenticated RCE in GoAnywhere MFT via Insecure Deserialization', excerpt: 'Pre-auth Java deserialization in LicenseResponseServlet, reachable via a crafted bundle parameter. Root cause and a minimal exploit chain.', date: '17 Dec 2023', read: '18 min', cover: 'linear-gradient(135deg,#1e3a8a 0%,#0c1e3a 50%,#7c1d1d 100%)', glyph: '◣', url: '/2023/12/17/goanywhere-cve-2023-0669.html', cve: 'CVE-2023-0669', img: M_IK + '/blog-posts/images/clefmmgml0x930jukfzf41rdb.png', file: '2023-12-17-goanywhere-cve-2023-0669.md' },
  { id: 2, sev: 'HIGH', tag: 'WRITEUP',      tagColor: '#06b6d4', title: 'Bypassing URL Blacklists in Python urllib with a Leading Space',     excerpt: 'A whitespace-tolerant scheme parser disagrees with downstream allowlists. One byte slips past most SSRF defenses written before 3.11.4.', date: '01 Aug 2023', read: '12 min', cover: 'linear-gradient(135deg,#0c4a6e 0%,#075985 60%,#0f172a 100%)', glyph: '◤', url: '/2023/08/01/urllib-cve-2023-24329.html',       cve: 'CVE-2023-24329', img: M_IK + '/images/cllj0rjy7enpa1hoc4sukd2pt.png', file: '2023-08-01-urllib-cve-2023-24329.md' },
  { id: 3, sev: 'CRIT', tag: 'CRITICAL RCE', tagColor: '#ef4444', title: 'Path Traversal → RCE in the Openfire XMPP Server',                    excerpt: 'Openfire normalizes ASCII traversal but trusts %u002e. With the plugin uploader, that mismatch is enough for unauthenticated RCE.',     date: '01 Jun 2023', read: '14 min', cover: 'linear-gradient(135deg,#7c2d12 0%,#9a3412 50%,#0f172a 100%)', glyph: '◢', url: '/2023/06/01/openfire-cve-2023-32315.html',     cve: 'CVE-2023-32315', img: M_IK + '/images/clkn0bfri0eas1gnb80982ni3.jpg', file: '2023-06-01-openfire-cve-2023-32315.md' },
  { id: 4, sev: 'CRIT', tag: 'CRITICAL RCE', tagColor: '#ef4444', title: 'Authentication Bypass & RCE in PaperCut MF/NG',                       excerpt: 'Session puzzling in SetupCompleted lets an unauthenticated attacker walk into the admin panel and pivot to RCE via the scripting engine.', date: '21 Apr 2023', read: '16 min', cover: 'linear-gradient(135deg,#4c1d95 0%,#581c87 60%,#0f172a 100%)', glyph: '◆', url: '/2023/04/21/papercut-cve-2023-27350.html',     cve: 'CVE-2023-27350', img: M_IK + '/images/clj3lmml60phc0vnyht0va1pb.png', file: '2023-04-21-papercut-cve-2023-27350.md' },
  { id: 5, sev: 'HIGH', tag: 'WRITEUP',      tagColor: '#06b6d4', title: 'Windows Backup Service LPE — SYSTEM via Arbitrary File Delete',       excerpt: 'A TOCTOU race in the Windows Backup Service turns a low-priv delete primitive into a SYSTEM shell. The first Windows kernel LPE of 2023.', date: '01 Feb 2023', read: '22 min', cover: 'linear-gradient(135deg,#78350f 0%,#92400e 60%,#0f172a 100%)', glyph: '◈', url: '/2023/02/01/windows-lpe-cve-2023-21752.html',  cve: 'CVE-2023-21752', img: M_IK + '/images/cllxkmlr64fwd1gn2befccbg5.png', file: '2023-02-01-windows-lpe-cve-2023-21752.md' },
  { id: 6, sev: 'MED',  tag: 'WRITEUP',      tagColor: '#06b6d4', title: 'KeePass Password Theft via Malicious Config File',                   excerpt: 'With write access to the XML config, an attacker silently exfiltrates the entire vault — no master password prompt, no user prompt at all.', date: '20 Jan 2023', read: '10 min', cover: 'linear-gradient(135deg,#14532d 0%,#166534 60%,#0f172a 100%)', glyph: '◉', url: '/2023/01/20/keepass-cve-2023-24055.html',     cve: 'CVE-2023-24055', img: null, file: '2023-01-20-keepass-cve-2023-24055.md' },
  { id: 7, sev: 'MED',  tag: 'WRITEUP',      tagColor: '#06b6d4', title: 'Arbitrary File Execution in Rust\'s webbrowser-rs via Crafted URLs',  excerpt: 'webbrowser-rs v0.8.2 hands user-supplied URLs straight to ShellExecuteW on Windows. No scheme check, no validation — just execute.',       date: '01 Dec 2022', read: '8 min',  cover: 'linear-gradient(135deg,#134e4a 0%,#115e59 60%,#0f172a 100%)', glyph: '▲', url: '/2022/12/01/webbrowser-rs-cve-2022-45299.html', cve: 'CVE-2022-45299', img: M_IK + '/blog-posts/images/cldtafcd32aep0jmo54a50mkl.png', file: '2022-12-01-webbrowser-rs-cve-2022-45299.md' },
  { id: 8, sev: 'CRIT', tag: 'CRITICAL RCE', tagColor: '#ef4444', title: 'Unauthenticated RCE in GetSimple CMS via Path Traversal',             excerpt: 'Path traversal in the theme editor\'s edited_file gives arbitrary file write. Pair it with an Apache disclosure and unauth RCE falls out.', date: '01 Nov 2022', read: '13 min', cover: 'linear-gradient(135deg,#831843 0%,#9d174d 60%,#0f172a 100%)', glyph: '●', url: '/2022/11/01/getsimple-cve-2022-41544.html',   cve: 'CVE-2022-41544', img: M_IK + '/images/clhbw0zn76a5w0jmrf01v01go.png', file: '2022-11-01-getsimple-cve-2022-41544.md' },
];

const M_THEMES = {
  yosef:    { name: 'yosef0x1',  bg: '#070b0e', panel: '#0d1318', nav: '#04080b', rule: '#141c24', rule2: '#27323d', fg: '#e3eaf1', muted: '#7e8a99', dim: '#4d5765', accent: '#34d399', accentInk: '#04110b' },
};

const M_SEV_BG = { CRIT: '#e0383b', HIGH: '#e08023', MED: '#caa022' };

function MixedArtboard({page = 'home'}) {
  const T = M_THEMES.yosef;
  const isLight = false;
  const [tag, setTag] = React.useState('all');
  const tags = ['all', 'critical rce', 'writeup'];
  const filtered = M_POSTS.filter(p => tag === 'all' || p.tag.toLowerCase() === tag);
  const DIV = '─'.repeat(160);
  const NAV = { home: 'index.html', about: 'about-demo.html', contact: 'contact-demo.html' };

  const css = `
    .m{background:${T.bg};color:${T.fg};font-family:"Inter","IBM Plex Sans",-apple-system,sans-serif;min-height:100%;width:100%;box-sizing:border-box;line-height:1.55;transition:background .25s,color .25s}
    .m a{color:inherit;text-decoration:none}

    .m-themes{position:fixed;top:16px;right:16px;display:flex;gap:6px;z-index:20;background:${T.panel};border:1px solid ${T.rule};padding:6px;border-radius:99px;box-shadow:0 4px 16px rgba(0,0,0,${isLight?'0.08':'0.4'})}
    .m-swatch{width:22px;height:22px;border-radius:50%;cursor:pointer;border:2px solid transparent;transition:transform .12s,border-color .12s}
    .m-swatch:hover{transform:scale(1.1)}
    .m-swatch.on{border-color:${T.fg}}

    .m-nav{background:${T.nav};border-bottom:1px solid ${T.rule};padding:18px 48px;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;z-index:10}
    .m-brand{display:flex;align-items:center;gap:12px}
    .m-mark{width:34px;height:34px;border:${M_AVATAR?'none':`1.5px solid ${T.accent}`};display:flex;align-items:center;justify-content:center;font-family:"IBM Plex Mono",monospace;font-weight:600;font-size:13px;color:${T.accent};border-radius:${M_AVATAR?'50%':'4px'};letter-spacing:-0.02em;overflow:hidden}
    .m-mark-img{width:100%;height:100%;object-fit:cover;display:block}
    .m-name{font-family:"IBM Plex Mono",monospace;font-size:15px;font-weight:500;letter-spacing:-0.01em}
    .m-name span.dot{color:${T.accent}}
    .m-name .cur{color:${T.accent};animation:m-blink 1.1s steps(2) infinite;margin-left:2px}
    @keyframes m-blink{50%{opacity:0}}
    .m-tag{font-size:11px;color:${T.dim};margin-top:2px;letter-spacing:0.02em}
    .m-links{display:flex;gap:28px;font-size:13px;color:${T.muted};font-weight:500}
    .m-links a{cursor:pointer;transition:color .12s;position:relative;padding-bottom:4px}
    .m-links a:hover, .m-links a.on{color:${T.fg}}
    .m-links a.on::after{content:'';position:absolute;left:0;right:0;bottom:-22px;height:2px;background:${T.accent}}
    .m-cta{background:${T.accent};color:${T.accentInk};padding:8px 16px;border-radius:4px;font-size:12px;font-weight:600;cursor:pointer;letter-spacing:0.01em;font-family:"IBM Plex Mono",monospace}

    .m-hero{padding:80px 48px 56px;max-width:1240px;margin:0 auto;border-bottom:1px solid ${T.rule}}
    .m-eyebrow{font-family:"IBM Plex Mono",monospace;font-size:11px;color:${T.accent};letter-spacing:0.16em;text-transform:uppercase;margin-bottom:22px;display:inline-flex;align-items:center;gap:10px}
    .m-eyebrow::before{content:'';width:24px;height:1px;background:${T.accent}}
    .m-h{font-size:58px;line-height:1.05;letter-spacing:-0.025em;font-weight:700;margin:0 0 22px;max-width:920px;text-wrap:balance}
    .m-h em{font-style:normal;color:${T.accent}}
    .m-h i{font-family:"Source Serif Pro","Source Serif 4",Georgia,serif;font-style:italic;font-weight:500;color:${T.fg};letter-spacing:-0.01em}
    .m-lede{font-size:18px;line-height:1.6;color:${T.muted};max-width:720px;margin:0 0 32px;text-wrap:pretty}
    .m-stats{display:flex;gap:48px;font-family:"IBM Plex Mono",monospace;font-size:12px;color:${T.dim};padding-top:24px;border-top:1px solid ${T.rule};flex-wrap:wrap}
    .m-stats .v{color:${T.fg};font-size:24px;font-weight:600;display:block;margin-bottom:2px;letter-spacing:-0.02em}

    .m-fetch-wrap{max-width:1240px;margin:0 auto;padding:48px 48px 8px}
    .m-fetch{display:grid;grid-template-columns:auto 1fr;gap:40px;align-items:start;font-family:"IBM Plex Mono",monospace;font-size:12.5px;line-height:1.85;background:${T.panel};border:1px solid ${T.rule};border-radius:8px;padding:28px 32px}
    .m-fetch pre{margin:0;color:${T.accent};font-size:10px;line-height:1.15;text-shadow:0 0 6px ${isLight?'transparent':'rgba(45,134,89,0.18)'}}
    .m-fetch .row{display:flex;gap:14px}
    .m-fetch .k{color:${T.accent};display:inline-block;width:110px;flex-shrink:0}
    .m-fetch .v{color:${T.fg}}
    .m-div{color:${T.rule};font-size:11px;line-height:1.1;letter-spacing:-0.06em;margin:24px auto;overflow:hidden;white-space:nowrap;user-select:none;max-width:1240px;padding:0 48px}
    .m-now{max-width:1240px;margin:0 auto;padding:0 48px 8px;font-family:"IBM Plex Mono",monospace;font-size:12px;color:${T.muted};display:flex;justify-content:space-between;align-items:center}
    .m-now b{color:${T.accent}}

    .m-tags{max-width:1240px;margin:0 auto;padding:32px 48px 0;display:flex;gap:8px;flex-wrap:wrap;align-items:center}
    .m-tags-label{font-family:"IBM Plex Mono",monospace;font-size:11px;color:${T.dim};letter-spacing:0.1em;text-transform:uppercase;margin-right:12px}
    .m-chip{padding:7px 16px;border:1px solid ${T.rule};background:transparent;color:${T.muted};border-radius:99px;cursor:pointer;font-size:12px;font-weight:500;transition:all .12s;text-transform:capitalize;font-family:"IBM Plex Mono",monospace}
    .m-chip:hover{color:${T.fg};border-color:${T.rule2}}
    .m-chip.on{background:${T.accent};color:${T.accentInk};border-color:${T.accent}}

    .m-grid{max-width:1480px;margin:0 auto;padding:40px 48px 64px}
    .m-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}
    @media (max-width:1100px){.m-cards{grid-template-columns:repeat(2,1fr)}}
    @media (max-width:720px){.m-cards{grid-template-columns:1fr}}
    .m-card{border:1px solid ${T.rule};border-radius:12px;overflow:hidden;cursor:pointer;transition:transform .15s,border-color .15s,box-shadow .15s;display:flex;flex-direction:column;background:${T.panel}}
    .m-card:hover{transform:translateY(-4px);border-color:${T.rule2};box-shadow:0 16px 40px rgba(0,0,0,${isLight?'0.12':'0.5'})}
    .m-card-cover{position:relative;height:240px;display:flex;align-items:flex-start;padding:18px;overflow:hidden;background-size:cover;background-position:center}
    .m-card-cover.has-img::before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0.25) 0%,rgba(0,0,0,0.55) 100%)}
    .m-card-cover.no-img::before{content:'';position:absolute;inset:0;background:rgba(0,0,0,0.15)}
    .m-card-cover.no-img::after{content:'';position:absolute;inset:0;background-image:radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);background-size:12px 12px}
    .m-card-glyph{position:absolute;font-size:180px;line-height:1;opacity:0.09;color:#fff;right:-10px;bottom:-30px;font-family:"IBM Plex Mono",monospace}
    .m-card-pill{position:relative;z-index:2;font-family:"IBM Plex Mono",monospace;font-size:10px;letter-spacing:0.16em;font-weight:600;padding:5px 10px;border-radius:3px;color:#fff;align-self:flex-start}
    .m-card-brick{position:absolute;right:14px;bottom:14px;z-index:2;font-family:"IBM Plex Mono",monospace;font-size:10px;font-weight:700;letter-spacing:0.14em;color:#0d0d0d;padding:5px 10px;border-radius:3px}
    .m-card-body{padding:24px 26px 26px;flex:1;display:flex;flex-direction:column;gap:12px}
    .m-card-cve{font-family:"IBM Plex Mono",monospace;font-size:11px;color:${T.accent};letter-spacing:0.12em;font-weight:600}
    .m-card-title{font-size:20px;line-height:1.3;font-weight:600;letter-spacing:-0.015em;margin:0;text-wrap:balance}
    .m-card-excerpt{font-size:14.5px;line-height:1.6;color:${T.muted};flex:1;text-wrap:pretty}
    .m-card-meta{display:flex;align-items:center;gap:10px;font-size:12px;color:${T.dim};padding-top:16px;border-top:1px solid ${T.rule};margin-top:8px}
    .m-card-meta b{color:${T.fg};font-weight:500}
    .m-avatar-sm{width:24px;height:24px;border-radius:50%;background:${T.accent};display:flex;align-items:center;justify-content:center;font-family:"IBM Plex Mono",monospace;font-weight:600;font-size:10px;color:${T.accentInk};overflow:hidden}
    .m-avatar-sm img{width:100%;height:100%;object-fit:cover;display:block}

    .m-block{max-width:1240px;margin:0 auto;padding:24px 48px 0}
    .m-block h2{font-family:"IBM Plex Mono",monospace;font-size:11px;color:${T.muted};letter-spacing:0.14em;text-transform:uppercase;margin:0 0 16px;font-weight:500}
    .m-series-row{display:grid;grid-template-columns:48px 1fr auto;gap:18px;padding:14px 0;font-size:14px;color:${T.fg};border-bottom:1px solid ${T.rule};font-family:"IBM Plex Mono",monospace;align-items:center}
    .m-series-row .n{color:${T.dim}}
    .m-series-row .c{color:${T.muted};font-size:11px;letter-spacing:0.08em}

    .m-foot{background:${T.nav};border-top:1px solid ${T.rule};padding:56px 48px 28px;margin-top:48px}
    .m-foot-inner{max-width:1240px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr;gap:48px}
    .m-foot h3{font-family:"IBM Plex Mono",monospace;font-size:11px;color:${T.dim};letter-spacing:0.16em;text-transform:uppercase;font-weight:500;margin:0 0 14px}
    .m-foot p{color:${T.muted};font-size:13.5px;line-height:1.65;margin:0;max-width:400px}
    .m-foot ul{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px}
    .m-foot ul a{color:${T.muted};font-size:13px;cursor:pointer}
    .m-foot ul a:hover{color:${T.accent}}
    .m-foot-bottom{max-width:1240px;margin:48px auto 0;padding-top:24px;border-top:1px solid ${T.rule};display:flex;justify-content:space-between;font-family:"IBM Plex Mono",monospace;font-size:11px;color:${T.dim};letter-spacing:0.06em;flex-wrap:wrap;gap:12px}
    .m-foot-bottom .roman{color:${T.accent};letter-spacing:0.12em}
  `;

  return (
    <div className="m">
      <style>{css}</style>

      <div className="m-nav">
        <div className="m-brand">
          <div className="m-mark">
            {M_AVATAR
              ? <img className="m-mark-img" src={M_AVATAR} alt="yosef0x1"
                     onError={(e)=>{e.target.style.display='none';e.target.parentNode.textContent='y0';}} />
              : 'y0'}
          </div>
          <div>
            <div className="m-name">yosef0x1<span className="cur">▌</span></div>
            <div className="m-tag">vulnerability research · exploit development</div>
          </div>
        </div>
        <div className="m-links">
          <a className={page === 'home' ? 'on' : ''} href={NAV.home}>Home</a>
          <a className={page === 'about' ? 'on' : ''} href={NAV.about}>About</a>
          <a className={page === 'contact' ? 'on' : ''} href={NAV.contact}>Contact</a>
        </div>
        <a className="m-cta" href={M_BASE + '/feed.xml'}>RSS →</a>
      </div>

      {page === 'about' && (
      <div className="m-hero">
        <div className="m-eyebrow">About — yosef0x1</div>
        <h1 className="m-h">Offensive security research.</h1>
        <p className="m-lede">I find, exploit, and disclose vulnerabilities — CVEs, bug bounties, and red team work.</p>
      </div>
      )}

      {page === 'contact' && (
      <div className="m-hero">
        <div className="m-eyebrow">Contact — coordinated disclosure</div>
        <h1 className="m-h">Get in touch.</h1>
        <p className="m-lede">Vulnerability reports, bounty discussions, and collaborations welcome. Encrypted mail preferred.</p>
      </div>
      )}

      {page === 'home' && (<>
      <div className="m-tags" style={{paddingTop:32}}>
        <span className="m-tags-label">Filter</span>
        {tags.map(t => (
          <button key={t} className={'m-chip ' + (tag === t ? 'on' : '')} onClick={() => setTag(t)}>{t}</button>
        ))}
      </div>

      <div className="m-grid">
        <div className="m-cards">
          {filtered.map(p => (
            <a className="m-card" key={p.id} href={'post-demo.html?cve=' + p.cve}>
              <div
                className={'m-card-cover ' + (p.img ? 'has-img' : 'no-img')}
                style={p.img ? {backgroundImage: `url(${p.img})`} : {background: p.cover}}
              >
                {!p.img && <span className="m-card-glyph">{p.glyph}</span>}
                <span className="m-card-pill" style={{background: p.tagColor}}>{p.tag}</span>
                <span className="m-card-brick" style={{background: M_SEV_BG[p.sev]}}>{p.sev}</span>
              </div>
              <div className="m-card-body">
                <div className="m-card-cve">{p.cve}</div>
                <h3 className="m-card-title">{p.title}</h3>
                <p className="m-card-excerpt">{p.excerpt}</p>
                <div className="m-card-meta">
                  <span className="m-avatar-sm">{M_AVATAR ? <img src={M_AVATAR} alt="yosef0x1" onError={(e)=>{e.target.style.display='none';e.target.parentNode.textContent='y0';}} /> : 'y0'}</span>
                  <b>yosef0x1</b>
                  <span>·</span>
                  <span>{p.date}</span>
                  <span>·</span>
                  <span>{p.read}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="m-div">{DIV}</div>

      <div className="m-block">
        <h2>// series</h2>
        <div className="m-series-row"><span className="n">01</span><span>Java deserialization in the wild</span><span className="c">4 parts</span></div>
        <div className="m-series-row"><span className="n">02</span><span>Windows LPE primitives</span><span className="c">3 parts</span></div>
        <div className="m-series-row"><span className="n">03</span><span>Parser differentials & SSRF bypasses</span><span className="c">2 parts</span></div>
      </div>
      </>)}

      {page === 'about' && (<>
      <div className="m-block" style={{paddingTop:48}}>
        <h2>// specializations</h2>
        <div className="m-series-row"><span className="n">01</span><span>Network protocols & firmware reverse engineering</span><span className="c">primary</span></div>
        <div className="m-series-row"><span className="n">02</span><span>Supply chain security research</span><span className="c">active</span></div>
        <div className="m-series-row"><span className="n">03</span><span>Web & API security — auth bypass, injection, business logic</span><span className="c">primary</span></div>
        <div className="m-series-row"><span className="n">04</span><span>Embedded systems — UART/JTAG extraction, bootloader analysis</span><span className="c">active</span></div>
        <div className="m-series-row"><span className="n">05</span><span>Malware analysis & C2 protocol reverse engineering</span><span className="c">active</span></div>
        <div className="m-series-row"><span className="n">06</span><span>ICS / SCADA security</span><span className="c">selective</span></div>
      </div>

      <div className="m-block" style={{marginTop:32}}>
        <h2>// approach</h2>
        <p style={{color:T.muted,fontSize:15,lineHeight:1.7,maxWidth:780,fontFamily:'Inter,sans-serif'}}>All research is conducted under responsible disclosure frameworks. CVE acknowledgments, bug bounty programs, and contracted red team engagements only. No 0-day sales, no offensive ops outside scope.</p>
      </div>
      </>)}

      {page === 'contact' && (<>
      <div className="m-block" style={{paddingTop:32}}>
        <h2>// channels</h2>
        <div className="m-series-row"><span className="n">→</span><span>research@yosef0x1.com</span><span className="c">PGP REQUIRED</span></div>
        <div className="m-series-row"><span className="n">→</span><span><a href="https://github.com/yosef0x1" style={{color:T.fg}}>github.com/yosef0x1</a></span><span className="c">CODE · TOOLS</span></div>
        <div className="m-series-row"><span className="n">→</span><span><a href="https://twitter.com/yosef0x1" style={{color:T.fg}}>@yosef0x1 · twitter</a></span><span className="c">SHORT FORM</span></div>
        <div className="m-series-row"><span className="n">→</span><span><a href={M_BASE + '/feed.xml'} style={{color:T.fg}}>RSS feed</a></span><span className="c">SUBSCRIBE</span></div>
      </div>

      <div className="m-block" style={{marginTop:32}}>
        <h2>// disclosure</h2>
        <div className="m-series-row"><span className="n">→</span><span>PGP key</span><span className="c">0x4F3A · ED25519</span></div>
        <div className="m-series-row"><span className="n">→</span><span>Fingerprint</span><span className="c">REQUEST · VERIFY OOB</span></div>
        <div className="m-series-row"><span className="n">→</span><span>Timeline</span><span className="c">90 DAYS · VENDOR FIRST</span></div>
        <div className="m-series-row"><span className="n">→</span><span>Scope</span><span className="c">CVE · BOUNTY · RED TEAM</span></div>
        <div className="m-series-row"><span className="n">→</span><span>Response</span><span className="c">UNDER 72H</span></div>
      </div>
      </>)}

      <div className="m-foot">
        <div className="m-foot-inner">
          <div>
            <h3>About</h3>
            <p>Independent offensive security researcher. Network protocols, firmware reverse engineering, supply chain, web/API, embedded (UART/JTAG), malware & C2 analysis, ICS/SCADA. All research under responsible disclosure.</p>
          </div>
          <div>
            <h3>Site</h3>
            <ul>
              <li><a href={NAV.home}>Home</a></li>
              <li><a href={NAV.about}>About</a></li>
              <li><a href={NAV.contact}>Contact</a></li>
            </ul>
          </div>
          <div>
            <h3>Connect</h3>
            <ul>
              <li><a href="https://github.com/yosef0x1">GitHub</a></li>
              <li><a href="https://twitter.com/yosef0x1">Twitter</a></li>
              <li><a href={M_BASE + '/feed.xml'}>RSS feed</a></li>
            </ul>
          </div>
        </div>
        <div className="m-foot-bottom">
          <span>© 2026 yosef0x1 · all research for educational purposes</span>
          <span className="roman">MMXXVI · PGP 0x4F3A · ed25519</span>
        </div>
      </div>
    </div>
  );
}
window.MixedArtboard = MixedArtboard;
