/**
 * SAID RUN 2026 — Shared Application State & Integration Store
 * Manages participants, quotas, promo codes, payment verification,
 * data change requests, race pack check-in, and cross-tab sync via localStorage.
 */
(function (global) {
  'use strict';

  var STORAGE_KEY = 'SAIDRUN_2026_DB_V1';

  var DEFAULT_DB = {
    event: {
      name: 'SAID RUN 2026',
      date: '20 September 2026',
      racePackDate: '19 September 2026',
      earlyBirdBaseUsed: 882, // 1000 promo total -> 118 remaining initially
      earlyBirdTotal: 1000,
      baseCounts: {
        '5k': 834, // + 2 seeded 5k (P-001, P-003) = 836 -> 164 remaining of 1000
        '10k': 445, // + 1 seeded 10k (P-002) = 446 -> 54 remaining of 500
        verified: 1239, // + 2 seeded verified = 1241
        racePackPicked: 411, // + 1 seeded picked = 412
        pendingReview: 6, // + 1 seeded pending = 7
        pendingChanges: 2 // + 1 seeded change = 3
      },
      categories: {
        '5k': {
          id: '5k',
          name: '5K Fun Run',
          quotaTotal: 1000,
          flagOff: '06.15 WIB',
          cutOff: '90 menit',
          prices: { umum: 150000, civitas: 110000, alumni: 125000 }
        },
        '10k': {
          id: '10k',
          name: '10K Competitive',
          quotaTotal: 500,
          flagOff: '06.00 WIB',
          cutOff: '150 menit',
          prices: { umum: 220000, civitas: 175000, alumni: 195000 }
        }
      }
    },
    promoCodes: {
      SAIDHEMAT10: { code: 'SAIDHEMAT10', discount: 10000, label: 'Promo SAIDHEMAT10' },
      UINRMS20: { code: 'UINRMS20', discount: 20000, label: 'Promo Civitas UINRMS20' },
      KOMUNITAS15: { code: 'KOMUNITAS15', discount: 15000, label: 'Promo Komunitas KOMUNITAS15' }
    },
    activeParticipantId: 'P-001',
    participants: [
      {
        id: 'P-001',
        bib: '5K-0142',
        qrToken: 'SR26-QR-5K0142',
        category: '5k',
        participantType: 'civitas',
        fullName: 'Luthfiya Zuhura',
        bibName: 'LUTHFIYA Z.',
        nimNik: '247411008',
        jerseySize: 'M',
        phone: '081298765432',
        email: 'luthfiya.zuhura@uinsaid.ac.id',
        community: 'Sains Data Runners',
        emergencyName: 'Ahmad Fuadi',
        emergencyRelation: 'Orang Tua',
        emergencyPhone: '081345678901',
        bloodType: 'O',
        medicalHistory: 'Tidak ada riwayat penyakit atau alergi obat.',
        insurance: true,
        promoCode: 'SAIDHEMAT10',
        discountAmount: 10000,
        basePrice: 110000,
        insurancePrice: 15000,
        totalAmount: 115000,
        paidAmount: 115000,
        trxId: 'TRX-SR26-08914',
        status: 'Terverifikasi',
        issueNote: '',
        racePackStatus: 'Belum Diambil',
        racePackPickedAt: null,
        chipTime: '00:28:14',
        rank: '#18 / 842',
        photoCount: 14,
        createdAt: '2026-08-20T09:15:00'
      },
      {
        id: 'P-002',
        bib: '10K-0089',
        qrToken: 'SR26-QR-10K0089',
        category: '10k',
        participantType: 'umum',
        fullName: 'Muhammad Rasyid Arrafi',
        bibName: 'RASYID A.',
        nimNik: '3311029485710002',
        jerseySize: 'L',
        phone: '081567891234',
        email: 'rasyid.arrafi@gmail.com',
        community: 'Solo Runners',
        emergencyName: 'Siti Aminah',
        emergencyRelation: 'Istri',
        emergencyPhone: '081567891235',
        bloodType: 'A',
        medicalHistory: 'Tidak ada',
        insurance: true,
        promoCode: '',
        discountAmount: 0,
        basePrice: 220000,
        insurancePrice: 15000,
        totalAmount: 235000,
        paidAmount: 235000,
        trxId: 'TRX-SR26-08750',
        status: 'Terverifikasi',
        issueNote: '',
        racePackStatus: 'Sudah Diambil',
        racePackPickedAt: '2026-09-19T10:15:00',
        chipTime: '00:46:52',
        rank: '#12 / 446',
        photoCount: 21,
        createdAt: '2026-08-18T14:22:00'
      },
      {
        id: 'P-003',
        bib: '—',
        qrToken: '',
        category: '5k',
        participantType: 'alumni',
        fullName: 'Khatrunnada Salsabila',
        bibName: 'KHATRUNNADA',
        nimNik: '205110042',
        jerseySize: 'S',
        phone: '085712349876',
        email: 'khatrunnada@alumni.uinsaid.ac.id',
        community: 'Alumni UIN Runners',
        emergencyName: 'Budi Santoso',
        emergencyRelation: 'Kakak',
        emergencyPhone: '085712349877',
        bloodType: 'B',
        medicalHistory: 'Asma ringan (bawa inhaler)',
        insurance: false,
        promoCode: '',
        discountAmount: 0,
        basePrice: 125000,
        insurancePrice: 0,
        totalAmount: 125000,
        paidAmount: 125100,
        trxId: 'TRX-SR26-08891',
        status: 'Perlu Pemeriksaan',
        issueNote: 'Nominal tidak cocok (Tagihan Rp 125.000 • Terbaca Rp 125.100)',
        racePackStatus: '—',
        racePackPickedAt: null,
        chipTime: '—',
        rank: '—',
        photoCount: 0,
        createdAt: '2026-09-01T11:05:00'
      }
    ],
    changeRequests: [
      {
        id: 'CR-001',
        participantId: 'P-001',
        participantName: 'Luthfiya Zuhura',
        bib: '5K-0142',
        field: 'Ukuran Jersey',
        oldValue: 'M',
        newValue: 'L',
        note: 'Stok ukuran L tersedia',
        status: 'Menunggu Persetujuan',
        createdAt: '2026-09-10T09:30:00'
      }
    ],
    auditLogs: [
      {
        id: 'LOG-001',
        actor: 'Sistem QRIS',
        action: 'Verifikasi otomatis transaksi TRX-SR26-08914 (Luthfiya Zuhura)',
        timestamp: '2026-08-20T09:16:12'
      },
      {
        id: 'LOG-002',
        actor: 'Melani Yusi (Admin)',
        action: 'Penyerahan Race Pack BIB 10K-0089 (Muhammad Rasyid Arrafi)',
        timestamp: '2026-09-19T10:15:00'
      }
    ]
  };

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function loadDB() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        var fresh = clone(DEFAULT_DB);
        saveDB(fresh);
        return fresh;
      }
      var parsed = JSON.parse(raw);
      if (!parsed || !parsed.participants || !parsed.event) {
        var reset = clone(DEFAULT_DB);
        saveDB(reset);
        return reset;
      }
      return parsed;
    } catch (e) {
      return clone(DEFAULT_DB);
    }
  }

  function saveDB(db) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    } catch (e) {
      // Ignore storage quota errors in restricted environments
    }
  }

  function resetDB() {
    var fresh = clone(DEFAULT_DB);
    saveDB(fresh);
    return fresh;
  }

  function formatRupiah(num) {
    var n = Number(num) || 0;
    return 'Rp ' + n.toLocaleString('id-ID');
  }

  function getCategoryLabel(catId) {
    return catId === '10k' ? '10K Competitive' : '5K Fun Run';
  }

  function getParticipantTypeLabel(typeId) {
    if (typeId === 'civitas') return 'Civitas UIN RMS';
    if (typeId === 'alumni') return 'Alumni';
    return 'Umum';
  }

  function getShortTypeLabel(typeId) {
    if (typeId === 'civitas') return 'Civitas';
    if (typeId === 'alumni') return 'Alumni';
    return 'Umum';
  }

  function getStats(db) {
    db = db || loadDB();
    var base = db.event.baseCounts;
    var count5k = base['5k'];
    var count10k = base['10k'];
    var verified = base.verified;
    var racePackPicked = base.racePackPicked;
    var pendingReview = base.pendingReview;
    var pendingChanges = base.pendingChanges;

    db.participants.forEach(function (p) {
      if (p.status !== 'Ditolak' && p.status !== 'Kedaluwarsa') {
        if (p.category === '5k') count5k += 1;
        if (p.category === '10k') count10k += 1;
      }
      if (p.status === 'Terverifikasi') verified += 1;
      if (p.status === 'Perlu Pemeriksaan') pendingReview += 1;
      if (p.racePackStatus === 'Sudah Diambil') racePackPicked += 1;
    });

    db.changeRequests.forEach(function (cr) {
      if (cr.status === 'Menunggu Persetujuan') pendingChanges += 1;
    });

    var totalRegistered = count5k + count10k;
    var totalQuota = db.event.categories['5k'].quotaTotal + db.event.categories['10k'].quotaTotal;
    var rem5k = Math.max(0, db.event.categories['5k'].quotaTotal - count5k);
    var rem10k = Math.max(0, db.event.categories['10k'].quotaTotal - count10k);
    var extraRegs = Math.max(0, db.participants.length - 3);
    var earlyBirdRemaining = Math.max(0, db.event.earlyBirdTotal - db.event.earlyBirdBaseUsed - extraRegs);

    return {
      totalRegistered: totalRegistered,
      totalQuota: totalQuota,
      count5k: count5k,
      count10k: count10k,
      rem5k: rem5k,
      rem10k: rem10k,
      verified: verified,
      racePackPicked: racePackPicked,
      pendingReview: pendingReview,
      pendingChanges: pendingChanges,
      earlyBirdRemaining: earlyBirdRemaining
    };
  }

  function generateBib(db, category) {
    var prefix = category === '10k' ? '10K-' : '5K-';
    var num = category === '10k' ? 90 : 143;
    var existing = db.participants.map(function (p) { return p.bib; });
    while (existing.indexOf(prefix + String(num).padStart(4, '0')) !== -1) {
      num += 1;
    }
    return prefix + String(num).padStart(4, '0');
  }

  function generateTrxId(db) {
    var num = 8915 + db.participants.length;
    return 'TRX-SR26-' + String(num).padStart(5, '0');
  }

  function addParticipant(payload) {
    var db = loadDB();
    var id = 'P-' + String(db.participants.length + 1).padStart(3, '0');
    var trxId = generateTrxId(db);
    var newP = {
      id: id,
      bib: '—',
      qrToken: '',
      category: payload.category || '5k',
      participantType: payload.participantType || 'civitas',
      fullName: payload.fullName || 'Peserta Baru',
      bibName: (payload.bibName || payload.fullName || 'PESERTA').toUpperCase().slice(0, 14),
      nimNik: payload.nimNik || '',
      jerseySize: payload.jerseySize || 'M',
      phone: payload.phone || '',
      email: payload.email || 'peserta@saidrun.uinsaid.ac.id',
      community: payload.community || '',
      emergencyName: payload.emergencyName || '',
      emergencyRelation: payload.emergencyRelation || '',
      emergencyPhone: payload.emergencyPhone || '',
      bloodType: payload.bloodType || 'O',
      medicalHistory: payload.medicalHistory || 'Tidak ada',
      insurance: Boolean(payload.insurance),
      promoCode: payload.promoCode || '',
      discountAmount: Number(payload.discountAmount) || 0,
      basePrice: Number(payload.basePrice) || 110000,
      insurancePrice: payload.insurance ? 15000 : 0,
      totalAmount: Number(payload.totalAmount) || 110000,
      paidAmount: 0,
      trxId: trxId,
      status: 'Menunggu Pembayaran',
      issueNote: '',
      racePackStatus: '—',
      racePackPickedAt: null,
      chipTime: '—',
      rank: '—',
      photoCount: 0,
      createdAt: new Date().toISOString()
    };

    db.participants.unshift(newP);
    db.activeParticipantId = newP.id;
    db.auditLogs.unshift({
      id: 'LOG-' + Date.now(),
      actor: 'Sistem Pendaftaran',
      action: 'Tagihan QRIS ' + trxId + ' dibuat untuk ' + newP.fullName + ' (' + formatRupiah(newP.totalAmount) + ')',
      timestamp: new Date().toISOString()
    });
    saveDB(db);
    return newP;
  }

  function verifyPayment(participantId, mode) {
    // mode: 'auto' (QRIS success), 'manual_approve', 'manual_issue', 'reject'
    var db = loadDB();
    var p = db.participants.find(function (item) { return item.id === participantId; });
    if (!p) return null;

    if (mode === 'auto' || mode === 'manual_approve') {
      if (p.bib === '—' || !p.bib) {
        p.bib = generateBib(db, p.category);
      }
      p.qrToken = 'SR26-QR-' + p.bib.replace('-', '');
      p.status = 'Terverifikasi';
      p.paidAmount = p.totalAmount;
      p.issueNote = '';
      if (p.racePackStatus === '—') {
        p.racePackStatus = 'Belum Diambil';
      }
      db.auditLogs.unshift({
        id: 'LOG-' + Date.now(),
        actor: mode === 'auto' ? 'Sistem QRIS' : 'Melani Yusi (Admin)',
        action: 'Pembayaran ' + p.trxId + ' (' + p.fullName + ') terverifikasi. BIB ' + p.bib + ' diterbitkan.',
        timestamp: new Date().toISOString()
      });
    } else if (mode === 'manual_issue') {
      p.status = 'Perlu Pemeriksaan';
      p.paidAmount = p.totalAmount + 100;
      p.issueNote = 'Nominal tidak cocok (Tagihan ' + formatRupiah(p.totalAmount) + ' • Terbaca ' + formatRupiah(p.paidAmount) + ')';
      db.auditLogs.unshift({
        id: 'LOG-' + Date.now(),
        actor: 'Sistem QRIS',
        action: 'Transaksi ' + p.trxId + ' (' + p.fullName + ') ditandai Perlu Pemeriksaan.',
        timestamp: new Date().toISOString()
      });
    } else if (mode === 'reject') {
      p.status = 'Ditolak';
      p.bib = '—';
      p.qrToken = '';
      p.racePackStatus = '—';
      p.issueNote = 'Ditolak oleh Admin, kuota dilepas kembali.';
      db.auditLogs.unshift({
        id: 'LOG-' + Date.now(),
        actor: 'Melani Yusi (Admin)',
        action: 'Pembayaran ' + p.trxId + ' (' + p.fullName + ') ditolak dan kuota dilepas.',
        timestamp: new Date().toISOString()
      });
    }

    saveDB(db);
    return p;
  }

  function submitChangeRequest(participantId, field, newValue) {
    var db = loadDB();
    var p = db.participants.find(function (item) { return item.id === participantId; });
    if (!p) return null;

    var oldValue = field === 'Ukuran Jersey' ? p.jerseySize : getCategoryLabel(p.category);
    var req = {
      id: 'CR-' + String(db.changeRequests.length + 1).padStart(3, '0'),
      participantId: p.id,
      participantName: p.fullName,
      bib: p.bib,
      field: field,
      oldValue: oldValue,
      newValue: newValue,
      note: field === 'Ukuran Jersey' ? 'Stok ukuran ' + newValue + ' tersedia' : 'Menunggu penyesuaian kategori',
      status: 'Menunggu Persetujuan',
      createdAt: new Date().toISOString()
    };
    db.changeRequests.unshift(req);
    db.auditLogs.unshift({
      id: 'LOG-' + Date.now(),
      actor: p.fullName,
      action: 'Mengajukan perubahan ' + field + ' (' + oldValue + ' → ' + newValue + ')',
      timestamp: new Date().toISOString()
    });
    saveDB(db);
    return req;
  }

  function resolveChangeRequest(requestId, approved) {
    var db = loadDB();
    var req = db.changeRequests.find(function (item) { return item.id === requestId; });
    if (!req) return null;

    var p = db.participants.find(function (item) { return item.id === req.participantId; });
    if (approved) {
      req.status = 'Disetujui';
      if (p) {
        if (req.field === 'Ukuran Jersey') {
          p.jerseySize = req.newValue;
        } else if (req.field === 'Kategori Lomba') {
          p.category = req.newValue.indexOf('10K') !== -1 ? '10k' : '5k';
        }
      }
    } else {
      req.status = 'Ditolak';
    }

    db.auditLogs.unshift({
      id: 'LOG-' + Date.now(),
      actor: 'Melani Yusi (Admin)',
      action: (approved ? 'Menyetujui' : 'Menolak') + ' perubahan ' + req.field + ' untuk ' + req.participantName,
      timestamp: new Date().toISOString()
    });
    saveDB(db);
    return req;
  }

  function checkInRacePack(tokenOrBib) {
    var db = loadDB();
    var query = String(tokenOrBib || '').trim().toUpperCase();
    var p = db.participants.find(function (item) {
      return (item.qrToken && item.qrToken.toUpperCase() === query) ||
             (item.bib && item.bib.toUpperCase() === query);
    });
    if (!p) return { ok: false, error: 'Token QR atau nomor BIB tidak ditemukan.' };
    if (p.status !== 'Terverifikasi') {
      return { ok: false, error: 'Peserta berstatus "' + p.status + '" dan belum dapat mengambil Race Pack.', participant: p };
    }
    if (p.racePackStatus === 'Sudah Diambil') {
      return { ok: false, error: 'Race Pack untuk BIB ' + p.bib + ' sudah pernah diambil sebelumnya (klaim ganda dicegah).', participant: p };
    }

    p.racePackStatus = 'Sudah Diambil';
    p.racePackPickedAt = new Date().toISOString();
    db.auditLogs.unshift({
      id: 'LOG-' + Date.now(),
      actor: 'Melani Yusi (Admin)',
      action: 'Check-in Race Pack berhasil: ' + p.fullName + ' (BIB ' + p.bib + ')',
      timestamp: new Date().toISOString()
    });
    saveDB(db);
    return { ok: true, participant: p };
  }

  function findParticipantByQuery(query) {
    var db = loadDB();
    var q = String(query || '').trim().toLowerCase();
    if (!q) return null;
    return db.participants.find(function (p) {
      return (p.bib && p.bib.toLowerCase() === q) ||
             (p.trxId && p.trxId.toLowerCase() === q) ||
             (p.email && p.email.toLowerCase() === q) ||
             (p.nimNik && p.nimNik.toLowerCase() === q) ||
             (p.fullName && p.fullName.toLowerCase().indexOf(q) !== -1);
    }) || null;
  }

  function setActiveParticipant(id) {
    var db = loadDB();
    var exists = db.participants.some(function (p) { return p.id === id; });
    if (exists) {
      db.activeParticipantId = id;
      saveDB(db);
    }
  }

  function getActiveParticipant(db) {
    db = db || loadDB();
    return db.participants.find(function (p) { return p.id === db.activeParticipantId; }) || db.participants[0];
  }

  global.SaidRunStore = {
    STORAGE_KEY: STORAGE_KEY,
    loadDB: loadDB,
    saveDB: saveDB,
    resetDB: resetDB,
    formatRupiah: formatRupiah,
    getCategoryLabel: getCategoryLabel,
    getParticipantTypeLabel: getParticipantTypeLabel,
    getShortTypeLabel: getShortTypeLabel,
    getStats: getStats,
    addParticipant: addParticipant,
    verifyPayment: verifyPayment,
    submitChangeRequest: submitChangeRequest,
    resolveChangeRequest: resolveChangeRequest,
    checkInRacePack: checkInRacePack,
    findParticipantByQuery: findParticipantByQuery,
    setActiveParticipant: setActiveParticipant,
    getActiveParticipant: getActiveParticipant
  };
})(window);
