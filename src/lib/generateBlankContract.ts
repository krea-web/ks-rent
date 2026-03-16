import jsPDF from "jspdf";
import "jspdf-autotable";

// Extend jsPDF type for autotable
declare module "jspdf" {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
    lastAutoTable: { finalY: number };
  }
}

const GOLD = [212, 175, 55] as const;
const BLACK = [10, 10, 10] as const;
const WHITE = [255, 255, 255] as const;
const GRAY_LIGHT = [245, 245, 245] as const;
const GRAY_TEXT = [100, 100, 100] as const;
const BORDER_GRAY = [200, 200, 200] as const;

export const generateBlankContract = () => {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const margin = 15;
  const contentW = pageW - margin * 2;

  // ── HEADER ──
  doc.setFillColor(...BLACK);
  doc.rect(0, 0, pageW, 28, "F");

  doc.setTextColor(...GOLD);
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("KS RENT", margin, 16);

  doc.setTextColor(...WHITE);
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.text("Contratto N. ____________", pageW - margin, 12, { align: "right" });
  doc.text("Data: ____________", pageW - margin, 18, { align: "right" });

  // ── TITLE ──
  let y = 38;
  doc.setTextColor(...BLACK);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("CONTRATTO DI NOLEGGIO STANDARD / STANDARD RENTAL CONTRACT", pageW / 2, y, { align: "center" });

  y = 46;

  const tableDefaults = {
    startY: y,
    margin: { left: margin, right: margin },
    styles: {
      fontSize: 8,
      cellPadding: 3,
      lineColor: BORDER_GRAY,
      lineWidth: 0.3,
      textColor: BLACK,
    },
    headStyles: {
      fillColor: GRAY_LIGHT,
      textColor: BLACK,
      fontStyle: "bold" as const,
      fontSize: 7,
    },
    theme: "grid" as const,
  };

  // ── TABLE 1: DATI CONDUCENTE ──
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...BLACK);
  doc.text("DATI CONDUCENTE / DRIVER DETAILS", margin, y);
  y += 3;

  doc.autoTable({
    ...tableDefaults,
    startY: y,
    head: [["Campo / Field", "Valore / Value"]],
    body: [
      ["Nome e Cognome / Full Name", ""],
      ["Codice Fiscale / Tax Code", ""],
      ["Data di Nascita / Date of Birth", ""],
      ["Luogo di Nascita / Place of Birth", ""],
      ["Indirizzo / Address", ""],
      ["Città / City", ""],
      ["Email", ""],
      ["Telefono / Phone", ""],
      ["N. Patente / License No.", ""],
      ["Rilasciata da / Issued by", ""],
      ["Data Emissione / Issue Date", ""],
      ["Scadenza Patente / Expiry Date", ""],
    ],
    columnStyles: { 0: { cellWidth: 55, fontStyle: "bold" }, 1: { cellWidth: contentW - 55 } },
  });

  y = doc.lastAutoTable.finalY + 6;

  // ── TABLE 2: ALTRA GUIDA ──
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.text("ALTRA GUIDA / ADDITIONAL DRIVERS", margin, y);
  y += 3;

  doc.autoTable({
    ...tableDefaults,
    startY: y,
    head: [["Guidatore / Driver", "N. Patente / License", "Rilasciata da / Issued by", "Data Emissione", "Scadenza", "Data Nascita"]],
    body: [
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
    ],
  });

  y = doc.lastAutoTable.finalY + 6;

  // ── TABLE 3: VEICOLO ──
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.text("VEICOLO / VEHICLE", margin, y);
  y += 3;

  doc.autoTable({
    ...tableDefaults,
    startY: y,
    head: [["Campo / Field", "Valore / Value"]],
    body: [
      ["Marca / Make", ""],
      ["Modello / Model", ""],
      ["Targa / Plate", ""],
      ["Carburante / Fuel", ""],
      ["Franchigia / Excess", ""],
      ["Polizza Danni / Damage Policy", ""],
    ],
    columnStyles: { 0: { cellWidth: 55, fontStyle: "bold" }, 1: { cellWidth: contentW - 55 } },
  });

  y = doc.lastAutoTable.finalY + 6;

  // ── TABLE 4: PERIODO ──
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.text("PERIODO DI NOLEGGIO / RENTAL PERIOD", margin, y);
  y += 3;

  doc.autoTable({
    ...tableDefaults,
    startY: y,
    head: [["Campo / Field", "Valore / Value"]],
    body: [
      ["Inizio / Start", ""],
      ["Fine / End", ""],
      ["Ritiro / Pickup (Luogo e ora)", ""],
      ["Restituzione / Return (Luogo e ora)", ""],
      ["Totale Giorni / Total Days", ""],
      ["Tariffa / Rate", ""],
    ],
    columnStyles: { 0: { cellWidth: 55, fontStyle: "bold" }, 1: { cellWidth: contentW - 55 } },
  });

  y = doc.lastAutoTable.finalY + 6;

  // ── TABLE 5: TOTALE ──
  doc.autoTable({
    ...tableDefaults,
    startY: y,
    head: [["TOTALE / TOTAL", "€"]],
    body: [],
    headStyles: {
      fillColor: BLACK,
      textColor: WHITE,
      fontStyle: "bold" as const,
      fontSize: 10,
    },
    columnStyles: { 0: { cellWidth: contentW - 40 }, 1: { cellWidth: 40, halign: "right" } },
  });

  y = doc.lastAutoTable.finalY + 10;

  // ── Check if we need a new page for signatures ──
  if (y > 240) {
    doc.addPage();
    y = 20;
  }

  // ── FIRMA DIGITALE ──
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...BLACK);
  doc.text("FIRMA DIGITALE / DIGITAL SIGNATURE", margin, y);
  y += 4;

  doc.setDrawColor(...BORDER_GRAY);
  doc.setLineWidth(0.3);
  doc.rect(margin, y, contentW, 25);
  y += 30;

  // ── Separator ──
  doc.setDrawColor(...GRAY_TEXT);
  doc.setLineWidth(0.2);
  doc.line(margin, y, pageW - margin, y);
  y += 5;

  // ── Company info ──
  doc.setFontSize(6.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...GRAY_TEXT);
  doc.text(
    "KS RENT S.R.L. | P.IVA: 02962380903 | Tel: +39 351 995 3988 | Email: info@ksrent.it",
    pageW / 2,
    y,
    { align: "center" }
  );
  y += 8;

  // ── Two-column signatures ──
  const colW = contentW / 2 - 5;

  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...BLACK);
  doc.text("FIRMA CLIENTE / Customer Signature", margin, y);
  doc.text("FIRMA KS RENT / Company Signature", margin + colW + 10, y);
  y += 3;

  doc.setDrawColor(...BORDER_GRAY);
  doc.rect(margin, y, colW, 20);
  doc.rect(margin + colW + 10, y, colW, 20);

  // ── Output ──
  doc.save("contratto_standard_ksrent.pdf");
};
