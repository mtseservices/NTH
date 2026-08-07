/* =================================================================
   NTH CONCIERGE — SMART ASSISTANT
   A fast, on-device Q&A assistant trained on this website's own
   content (products, prices, contact info, certifications, hours).
   It understands English and common Roman Urdu phrases. It is a
   rule/keyword based assistant (works fully offline, no data ever
   leaves the browser) — not a cloud AI model.
   ================================================================= */

const NTHAssistant = (function(){
  let opened = false;

  function fmtMoney(n){ return 'Rs. ' + Number(n).toLocaleString('en-PK'); }

  function waLink(msg){
    return `https://wa.me/${SITE_CONFIG.whatsapp[0].number}?text=${encodeURIComponent(msg)}`;
  }

  function productListAnswer(){
    const names = getAllProducts().map(p => `• ${p.name} — ${fmtMoney(p.price)}`).join('<br>');
    return `Here's our current range:<br>${names}<br><br>Tap a category on the Products section to see full details, or ask me about a specific item.`;
  }

  function findProduct(text){
    const all = getAllProducts();
    return all.find(p => text.includes(p.name.toLowerCase())) ||
           all.find(p => p.name.toLowerCase().split(' ').some(w => w.length > 3 && text.includes(w)));
  }

  const RULES = [
    { test: t => /\b(hi|hello|hey|assalam|salam|aoa)\b/.test(t),
      reply: () => `Assalam-o-Alaikum! Welcome to Natural Taste Hai. I'm your NTH Concierge — ask me about our products, prices, delivery, or how to reach us.` },

    { test: t => /(price|qeemat|qimat|rate|cost|kitne|kitna)/.test(t),
      reply: (t) => {
        const p = findProduct(t);
        if (p) return `${p.name} is priced at <b>${fmtMoney(p.price)}</b> (${p.packaging}). Would you like to order it on WhatsApp? <a href="${waLink('Assalam o Alaikum, mujhe '+p.name+' order karni hai.')}" target="_blank">Order now →</a>`;
        return productListAnswer();
      }},

    { test: t => /(product|item|range|catalog|menu|kya kya|verities|variety)/.test(t),
      reply: () => productListAnswer() },

    { test: t => /(address|location|kahan|kaha|kidhar|faisalabad|shop|factory|office)/.test(t),
      reply: () => `We're located at <b>${SITE_CONFIG.address}</b>. <a href="#contact">View on map →</a>` },

    { test: t => /(contact|number|whatsapp|call|phone|rabta)/.test(t),
      reply: () => `You can reach us directly:<br>• Sales & Orders: <a href="${waLink('Assalam o Alaikum')}" target="_blank">${SITE_CONFIG.whatsapp[0].display}</a><br>• Distributor Enquiries: <a href="https://wa.me/${SITE_CONFIG.whatsapp[1].number}" target="_blank">${SITE_CONFIG.whatsapp[1].display}</a><br>• Email: ${SITE_CONFIG.email}` },

    { test: t => /(email|mail)/.test(t),
      reply: () => `Our email is <b>${SITE_CONFIG.email}</b> — happy to help with bulk orders or partnership queries.` },

    { test: t => /(order|kaise|book|purchase|kharidna|buy)/.test(t),
      reply: () => `Ordering is simple — just message us on WhatsApp with the product name and quantity, and our team will confirm availability & delivery. <a href="${waLink('Assalam o Alaikum, mujhe order karni hai.')}" target="_blank">Start order on WhatsApp →</a>` },

    { test: t => /(delivery|shipping|deliver|kab tak|city|shehr)/.test(t),
      reply: () => `We currently deliver to 30+ cities across Pakistan. Share your city on WhatsApp and we'll confirm delivery time & charges.` },

    { test: t => /(halal|certificat|iso|haccp|quality|psqca|safe)/.test(t),
      reply: () => `NTH is proud to be ${SITE_CONFIG.certifications.map(c=>c.code).join(', ')} certified — every batch is quality-checked before it reaches you.` },

    { test: t => /(hour|time|open|band|khula|kab khulte)/.test(t),
      reply: () => `Our hours: ${SITE_CONFIG.hours.map(h=>h.days+' '+h.time).join(' • ')}` },

    { test: t => /(distributor|wholesale|bulk|reseller|dealer)/.test(t),
      reply: () => `We'd love to work with you! For distributor and bulk pricing, please reach our Distributor Enquiries line: <a href="https://wa.me/${SITE_CONFIG.whatsapp[1].number}" target="_blank">${SITE_CONFIG.whatsapp[1].display}</a>` },

    { test: t => /(thank|shukriya|thanks)/.test(t),
      reply: () => `Jazak Allah! Is there anything else I can help you with?` },

    { test: t => /(human|agent|real person|team se)/.test(t),
      reply: () => `Of course — connecting you with our team is one tap away. <a href="${waLink('Assalam o Alaikum, mujhe aap ki team se baat karni hai.')}" target="_blank">Chat with our team on WhatsApp →</a>` }
  ];

  function respond(raw){
    const t = raw.toLowerCase();
    const rule = RULES.find(r => r.test(t));
    if (rule) return rule.reply(t);
    const p = findProduct(t);
    if (p) return `${p.name}: ${p.description}<br>Price: <b>${fmtMoney(p.price)}</b> (${p.packaging})`;
    return `I may not have understood that fully — but our team can help right away. <a href="${waLink('Assalam o Alaikum, ' + raw)}" target="_blank">Continue on WhatsApp →</a>`;
  }

  function addMsg(html, who){
    const body = document.getElementById('chatBody');
    const div = document.createElement('div');
    div.className = 'msg ' + who;
    div.innerHTML = html;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function send(text){
    if (!text.trim()) return;
    addMsg(escapeHtml(text), 'user');
    setTimeout(() => addMsg(respond(text), 'bot'), 380);
  }

  function init(){
    const fab = document.getElementById('fabAi');
    const panel = document.getElementById('chatPanel');
    const closeBtn = document.getElementById('chatClose');
    const input = document.getElementById('chatInput');
    const form = document.getElementById('chatForm');
    const chips = document.getElementById('chipRow');

    fab.addEventListener('click', () => {
      panel.classList.toggle('open');
      if (!opened){
        opened = true;
        addMsg(`Assalam-o-Alaikum! 👋 I'm the <b>NTH Concierge</b>, your smart assistant for Natural Taste Hai. Ask me about products, prices, delivery or how to reach our team.`, 'bot');
      }
    });
    closeBtn.addEventListener('click', () => panel.classList.remove('open'));

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      send(input.value);
      input.value = '';
    });

    ['Product prices?','Delivery cities?','Talk to a human'].forEach(label => {
      const b = document.createElement('button');
      b.className = 'chip'; b.textContent = label;
      b.addEventListener('click', () => send(label));
      chips.appendChild(b);
    });
  }

  return { init };
})();
window.NTHAssistant = NTHAssistant;
