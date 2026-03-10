// =============================================
//  Manikanta's Travel Blog — Main JavaScript
//  Static website for AWS S3 + CloudFront
// =============================================

// ---- Navbar scroll effect ----
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
    backToTop.classList.add('visible');
  } else {
    navbar.classList.remove('scrolled');
    backToTop.classList.remove('visible');
  }
});

// ---- Hamburger menu ----
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ---- Scroll to top ----
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---- Animated counter ----
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'), 10);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = target >= 10000
      ? Math.floor(current).toLocaleString() + '+'
      : Math.floor(current) + (target > 100 ? '+' : '');
  }, 16);
}

// ---- Scroll reveal ----
const revealElements = document.querySelectorAll(
  '.dest-card, .tip-card, .gallery-item, .stat-item'
);
revealElements.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger animations
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(el => observer.observe(el));

// ---- Counter observer ----
const counterElements = document.querySelectorAll('.stat-number');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counterElements.forEach(el => counterObserver.observe(el));

// ---- Modal data ----
const modalData = {
  alps: {
    emoji: '🏔️',
    tag: 'Adventure',
    title: 'Swiss Alps, Switzerland',
    desc: 'The Swiss Alps are a breathtaking mountain range stretching across Switzerland, offering some of the most dramatic scenery in Europe. Whether you\'re skiing down pristine slopes in winter or hiking through wildflower-filled meadows in summer, the Alps deliver unforgettable experiences.',
    highlights: 'From Zermatt at the foot of the Matterhorn to the car-free village of Wengen, every corner is picture-perfect.',
    facts: [
      { label: 'Best Season', value: 'June – September' },
      { label: 'Currency', value: 'Swiss Franc (CHF)' },
      { label: 'Language', value: 'German / French' },
      { label: 'Budget', value: '$150–$300/day' },
    ]
  },
  kyoto: {
    emoji: '🏛️',
    tag: 'Culture',
    title: 'Kyoto, Japan',
    desc: 'Kyoto is the cultural soul of Japan, home to over 1,600 Buddhist temples, 400 Shinto shrines, and 17 UNESCO World Heritage Sites. Walk through the bamboo groves of Arashiyama, witness a geisha in Gion, or meditate in a Zen garden.',
    highlights: 'Cherry blossom season (late March to early April) transforms Kyoto into a pink fairytale — plan well in advance!',
    facts: [
      { label: 'Best Season', value: 'Mar–May / Oct–Nov' },
      { label: 'Currency', value: 'Japanese Yen (JPY)' },
      { label: 'Language', value: 'Japanese' },
      { label: 'Budget', value: '$80–$200/day' },
    ]
  },
  maldives: {
    emoji: '🌴',
    tag: 'Beach',
    title: 'Maldives',
    desc: 'The Maldives is pure paradise — a necklace of 1,200 coral islands scattered across the Indian Ocean. Known for its overwater bungalows, vibrant marine life, and impossibly clear turquoise waters, it\'s the ultimate romantic escape.',
    highlights: 'Snorkeling alongside manta rays, whale sharks, and colorful reef fish is an experience you\'ll never forget.',
    facts: [
      { label: 'Best Season', value: 'November – April' },
      { label: 'Currency', value: 'US Dollar (USD)' },
      { label: 'Language', value: 'Dhivehi / English' },
      { label: 'Budget', value: '$300–$1000/day' },
    ]
  },
  sahara: {
    emoji: '🏜️',
    tag: 'Desert',
    title: 'Sahara Desert, Morocco',
    desc: 'The Sahara is the world\'s largest hot desert, covering over 9 million square kilometers. In Morocco, the Erg Chebbi dunes near Merzouga rise up to 150 meters and glow orange and red as the sun sets. Camel treks and nights in desert camps under a sky full of stars are magical.',
    highlights: 'The silence of the desert at night, broken only by the wind and distant drumming, is a deeply humbling experience.',
    facts: [
      { label: 'Best Season', value: 'October – April' },
      { label: 'Currency', value: 'Moroccan Dirham' },
      { label: 'Language', value: 'Arabic / French' },
      { label: 'Budget', value: '$60–$150/day' },
    ]
  },
  santorini: {
    emoji: '🌅',
    tag: 'Romance',
    title: 'Santorini, Greece',
    desc: 'Perched on the rim of an ancient volcanic caldera, Santorini is arguably the most photographed island in the world. Its iconic white-washed buildings with blue-domed churches, dramatic cliff-side views, and legendary sunsets from Oia make it the ultimate romantic destination.',
    highlights: 'Arrive by ferry from Athens for the most dramatic first view of the caldera cliffs.',
    facts: [
      { label: 'Best Season', value: 'April – October' },
      { label: 'Currency', value: 'Euro (EUR)' },
      { label: 'Language', value: 'Greek' },
      { label: 'Budget', value: '$150–$400/day' },
    ]
  },
  amazon: {
    emoji: '🌿',
    tag: 'Nature',
    title: 'Amazon Rainforest, Brazil',
    desc: 'The Amazon is the planet\'s largest tropical rainforest, spanning 5.5 million sq km. It\'s home to 10% of all species on Earth, including over 40,000 plant species and 3,000 types of fish. Exploring its rivers, spotting rare wildlife, and connecting with indigenous communities is truly humbling.',
    highlights: 'The best base is Manaus, from where you can take river cruises deep into the untouched jungle.',
    facts: [
      { label: 'Best Season', value: 'June – September' },
      { label: 'Currency', value: 'Brazilian Real' },
      { label: 'Language', value: 'Portuguese' },
      { label: 'Budget', value: '$80–$200/day' },
    ]
  },
};

// ---- Open modal ----
function openModal(key) {
  const data = modalData[key];
  if (!data) return;

  const factsHTML = data.facts.map(f =>
    `<div class="modal-fact"><strong>${f.label}</strong><span>${f.value}</span></div>`
  ).join('');

  document.getElementById('modal-content').innerHTML = `
    <div class="modal-emoji">${data.emoji}</div>
    <span class="modal-tag">${data.tag}</span>
    <h3>${data.title}</h3>
    <p>${data.desc}</p>
    <p><em>${data.highlights}</em></p>
    <div class="modal-facts">${factsHTML}</div>
  `;

  document.getElementById('modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ---- Close modal ----
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ---- Subscribe form ----
function handleSubscribe(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!name || !email) return;

  // Hide form, show success
  document.getElementById('subscribe-form').style.display = 'none';
  document.getElementById('success-msg').style.display = 'block';
}

// ---- Active nav highlight on scroll ----
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 200) {
      current = section.id;
    }
  });

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === '#' + current) {
      a.style.color = '#fcbf49';
    }
  });
});
