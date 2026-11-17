// Data PUSPAGA. Tambahkan entri baru ke array ini setelah diverifikasi ke Dinas PPPA/PPKB setempat.
// Format: {nama, wilayah, provinsi, alamat, telp, email, sumber, url}
const DATA = [
 {nama:"PUSPAGA Kota Metro",wilayah:"Kota Metro",provinsi:"Lampung",alamat:"Metro Barat, Kota Metro, Lampung 34114",telp:"082281313362",email:"Puspaga.metro@gmail.com",sumber:"Rekapan Data PUSPAGA 2016-2021 (KPAI)",url:"https://www.kpai.go.id/rekapan-data-puspaga-2016-2021"},
 {nama:"PUSPAGA An Nur Kota Langsa",wilayah:"Kota Langsa",provinsi:"Aceh",alamat:"Kota Langsa, Aceh",telp:"08116701326",email:"bkkbppkotalangsa@gmail.com",sumber:"Rekapan Data PUSPAGA 2016-2021 (KPAI)",url:"https://www.kpai.go.id/rekapan-data-puspaga-2016-2021"},
 {nama:"PUSPAGA Rapi Kota Subulussalam",wilayah:"Kota Subulussalam",provinsi:"Aceh",alamat:"Kec. Simpang Kiri, Kota Subulussalam, Aceh",telp:"085281619378",email:"puspaga.subulussalam@gmail.com",sumber:"Rekapan Data PUSPAGA 2016-2021 (KPAI)",url:"https://www.kpai.go.id/rekapan-data-puspaga-2016-2021"},
 {nama:"PUSPAGA Balarea (Provinsi Jawa Barat)",wilayah:"Kota Bandung",provinsi:"Jawa Barat",alamat:"Jl. Sumatera No.50, Citarum, Kec. Bandung Wetan, Kota Bandung 40115",telp:"",email:"",sumber:"SIPENA Jabar",url:"https://sipena-jabar.com/puspaga/"},
 {nama:"PUSPAGA Kota Bandung",wilayah:"Kota Bandung",provinsi:"Jawa Barat",alamat:"Jl. Ibrahim Adjie No.84, Kacapiring, Kec. Batununggal, Kota Bandung 40272",telp:"",email:"puspaga.bdg@gmail.com",sumber:"SIPENA Jabar",url:"https://sipena-jabar.com/puspaga/"},
 {nama:"PUSPAGA Harmoni Kota Depok",wilayah:"Kota Depok",provinsi:"Jawa Barat",alamat:"Jl. Kahayan Raya No.1, Abadijaya, Kec. Sukmajaya, Kota Depok 16417",telp:"",email:"puspaga.17@gmail.com",sumber:"SIPENA Jabar",url:"https://sipena-jabar.com/puspaga/"},
 {nama:"PUSPAGA Wening Asih Kota Bogor",wilayah:"Kota Bogor",provinsi:"Jawa Barat",alamat:"Jl. Ciwaringin No.99, Bogor Tengah, Kota Bogor 16124",telp:"",email:"puspaga.weningasih@gmail.com",sumber:"SIPENA Jabar",url:"https://sipena-jabar.com/puspaga/"}
];
const PROV = ["Aceh","Sumatera Utara","Sumatera Barat","Riau","Kepulauan Riau","Jambi","Sumatera Selatan","Kepulauan Bangka Belitung","Bengkulu","Lampung","DKI Jakarta","Banten","Jawa Barat","Jawa Tengah","DI Yogyakarta","Jawa Timur","Bali","Nusa Tenggara Barat","Nusa Tenggara Timur","Kalimantan Barat","Kalimantan Tengah","Kalimantan Selatan","Kalimantan Timur","Kalimantan Utara","Sulawesi Utara","Gorontalo","Sulawesi Tengah","Sulawesi Barat","Sulawesi Selatan","Sulawesi Tenggara","Maluku","Maluku Utara","Papua","Papua Barat","Papua Selatan","Papua Tengah","Papua Pegunungan","Papua Barat Daya"];

const sel = document.getElementById('prov'), kab = document.getElementById('kab'), out = document.getElementById('hasil');
PROV.forEach(p => { const o = document.createElement('option'); o.value = p; o.textContent = p; sel.appendChild(o); });

function el(tag, text, cls){ const e = document.createElement(tag); if(text) e.textContent = text; if(cls) e.className = cls; return e; }

function cari(){
  out.innerHTML = '';
  const p = sel.value, k = kab.value.trim().toLowerCase();
  const hasil = DATA.filter(d => (!p || d.provinsi === p) && (!k || (d.wilayah + ' ' + d.nama).toLowerCase().includes(k)));
  if(hasil.length){
    hasil.forEach(d => {
      const c = el('div', '', 'pcard');
      c.appendChild(el('h3', d.nama));
      c.appendChild(el('p', d.alamat));
      if(d.telp) c.appendChild(el('p', 'Telepon/WA: ' + d.telp));
      if(d.email) c.appendChild(el('p', 'Email: ' + d.email));
      const s = el('small', 'Sumber: '); const a = el('a', d.sumber); a.href = d.url; a.target = '_blank'; a.rel = 'noopener'; s.appendChild(a);
      c.appendChild(s); out.appendChild(c);
    });
    out.appendChild(el('p', 'Data dapat berubah. Hubungi dulu sebelum datang, dan pastikan kontak masih aktif.', 'note'));
  } else {
    const box = el('div', '', 'empty');
    box.appendChild(el('p', 'Belum ada data PUSPAGA untuk wilayah ini di halaman ini. Cari kontak resmi terbaru lewat tautan berikut, atau tanyakan ke Dinas PPPA/PPKB kabupaten/kota setempat.'));
    const a = el('a', 'Cari PUSPAGA ' + (kab.value.trim() || '') + ' ' + p, 'btn btn-maroon');
    a.href = 'https://www.google.com/search?q=' + encodeURIComponent('PUSPAGA ' + kab.value.trim() + ' ' + p); a.target = '_blank'; a.rel = 'noopener'; a.style.marginTop = '14px';
    box.appendChild(a); out.appendChild(box);
  }
}
document.getElementById('cari').addEventListener('click', cari);
kab.addEventListener('keydown', e => { if(e.key === 'Enter') cari(); });
cari();
