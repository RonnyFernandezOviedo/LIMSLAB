# coding: utf-8
import logging
import os
from io import BytesIO
from tempfile import NamedTemporaryFile

from barcode import Code128
from barcode.writer import ImageWriter
from fpdf import FPDF

from core.config import settings
from core.time import get_time_now
from apps.impress.reports.utils import get_from_nested, strtobool

settings = settings
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class PDF(FPDF):
    def footer(self):
        # Position cursor at 1.5 cm from bottom:
        self.set_y(-15)
        # Setting font: helvetica italic 8
        self.set_font("helvetica", "I", 8)
        # Printing page number:
        self.cell(0, 10, f"Pagina {self.page_no()}/{{nb}}", align="C")


class FelicityImpress:
    def __init__(self):
        self.logo_path = settings.BASE_DIR + "/assets/xlabs.png"
        self.pdf = PDF(orientation="P", unit="mm", format="A4")
        self.pdf.set_font("Helvetica")
        self.pdf.set_page_background((255, 255, 255))
        self.pdf_w = 210
        self.pdf_h = 297
        self.margin_top = 20
        self.margin_left = 20
        self.y_diff = 5  # space between rows
        self.time_now = get_time_now()

    async def _make(self, sample: dict, report_state):
        laboratory = get_from_nested(sample, "laboratory")
        profiles = [
            get_from_nested(p, "name") for p in get_from_nested(sample, "profiles")
        ]
        analyses = [
            get_from_nested(p, "name") for p in get_from_nested(sample, "analyses")
        ]
        #
        sampe_id = get_from_nested(sample, "sample_id")
        self.pdf.add_page()
        self.pdf.set_font("helvetica", "", 12.0)

        # Page Border
        self.pdf.set_line_width(0.0)
        #self.pdf.rect(15.0, 15.0, 180, 245.0)

        self.pdf.set_line_width(0.0)
        self.pdf.line(30.0, 5.0, 190.0, 5.0) #quite 13 unidades


        # Logo
        self.pdf.image(self.logo_path, 20, 6, link="", type="",h=15.0)
        # Contact Details
        self.pdf.set_font("helvetica", "B", 6.5)
        self.pdf.set_xy(157.5, 6)
        self.pdf.cell(ln=0, h=5.5, align="L", w=10.0, txt="Telefono:", border=0)
        self.pdf.set_font("helvetica", "I", 6.5)
        self.pdf.set_xy(180, 6)
        self.pdf.cell(ln=0,h=5.5,align="R", w=10.0,txt="(506)2444-44-48", border=0)
        # ---
        self.pdf.set_font("helvetica", "B", 6.5)
        self.pdf.set_xy(157.5, 8.5)
        self.pdf.cell(ln=0, h=5.5, align="L", w=10.0, txt="Whatsapp:", border=0)
        self.pdf.set_font("helvetica", "I", 6.5)
        self.pdf.set_xy(180, 8.5)
        self.pdf.cell(ln=0,h=5.5,align="R",w=10.0,txt="(506)2444-44-48",border=0)
        # ---
        self.pdf.set_font("helvetica", "B", 6.5)
        self.pdf.set_xy(157.5, 11)
        self.pdf.cell(ln=0, h=5.5, align="L", w=10.0, txt="Correo:", border=0)
        self.pdf.set_font("helvetica", "I", 6.5)
        self.pdf.set_xy(180, 11)
        self.pdf.cell(ln=0,h=5.5,w=10.0,align="R",txt="xlabs@gmail.com",border=0)

        self.pdf.set_line_width(0.0)
        self.pdf.line(30.0, 21.0, 190.0, 21.0)

        # Report BarCode
        svg_img_bytes = BytesIO()
        Code128(sampe_id, writer=ImageWriter()).write(
            svg_img_bytes, options={"write_text": False}
        )
        with NamedTemporaryFile(delete=False, suffix=".png") as temp:
            temp.write(svg_img_bytes.getvalue())
            temp_path = temp.name
        self.pdf.image(temp_path, x=152.8, y=21.5, w=40, h=5)
        os.unlink(temp_path)

        self.pdf.set_font("helvetica", "", 8.0)
        self.pdf.set_xy(154.3, 26)
        self.pdf.cell(ln=0, h=5, align="L", w=10.0, txt=sampe_id, border=0)


        #Color fill and text
        self.pdf.set_fill_color(7, 89, 133)

        # Lab Report Status
        self.pdf.set_font("helvetica", "B", 10.0)
        self.pdf.set_xy(20.0, 30)
        self.pdf.cell(
            ln=0, h=5.5, align="C", w=170.0, txt="Reporte de Analisis".upper(), border=0,fill=False
        )
        # Customer Info
        self.pdf.set_text_color(255,255,255)
        
        self.pdf.set_xy(20.0, 50)
        self.pdf.cell(ln=0, h=5.0, align="L", w=170.0, txt="Informacion de Cliente", border=0,fill=True)
        self.pdf.set_text_color(0,0,0)
        client = get_from_nested(sample, "analysis_request.client")
        patient = get_from_nested(sample, "analysis_request.patient")
        full_name = (get_from_nested(patient, "first_name")+ " "+ get_from_nested(patient, "last_name"))
        self.pdf.set_font("helvetica", "B", 8.0)
        self.pdf.set_xy(20, 55)
        self.pdf.cell(ln=0, h=4.5, align="L", w=20.0, txt="Cliente: ", border=0)
        self.pdf.set_font("helvetica", "", 7.0)
        self.pdf.set_xy(40, 55)
        self.pdf.cell(ln=0,h=4.5,align="L",w=20.0,txt=get_from_nested(client, "name"), border=0)
        self.pdf.set_font("helvetica", "B", 8.0)
        self.pdf.set_xy(20, 59)
        self.pdf.cell(ln=0, h=4.5, align="L", w=20.0, txt="Contacto: ", border=0)
        self.pdf.set_font("helvetica", "", 7.0)
        self.pdf.set_xy(40, 59)
        self.pdf.cell(ln=0, h=4.5, align="L", w=20.0, txt=full_name, border=0)
        self.pdf.set_font("helvetica", "B", 8.0)
        self.pdf.set_xy(20, 63)
        self.pdf.cell(ln=0, h=4.5, align="L", w=20.0, txt="Cliente ID: ", border=0)
        self.pdf.set_font("helvetica", "", 7.0)
        self.pdf.set_xy(40, 63)
        self.pdf.cell( ln=0,h=4.5,align="L",w=20.0,txt=get_from_nested(client, "cliente_id"),border=0,)
        self.pdf.set_font("helvetica", "B", 8.0)
        self.pdf.set_xy(20, 67)
        self.pdf.cell(ln=0, h=4.5, align="L", w=20.0, txt="Direccion: ", border=0)
        self.pdf.set_font("helvetica", "", 7.0)
        self.pdf.set_xy(40, 67)
        self.pdf.cell(ln=0,h=4.5,align="L",w=20.0,txt=get_from_nested(client, "cliente_direccion"),border=0,)

         # Sample Date and ID
        self.pdf.set_text_color(255,255,255)
        self.pdf.set_font("helvetica", "B", 10.0)

        self.pdf.set_xy(20, 85) 
        self.pdf.cell(ln=0, h=4.5, align="L", w=42.5, txt="ID Muestra", border=0, fill=True)
        self.pdf.set_xy(62.5, 85)
        self.pdf.cell(ln=0, h=4.5, align="L", w=42.5, txt="Fecha Muestreo", border=0, fill=True)
        self.pdf.set_xy(105, 85)
        self.pdf.cell(ln=0, h=4.5, align="L", w=42.5, txt="Fecha Recibido", border=0, fill=True)
        self.pdf.set_xy(147.5, 85)
        self.pdf.cell(ln=0, h=4.5, align="L", w=42.5, txt="Fecha de Reporte", border=0, fill=True)

        self.pdf.set_text_color(0,0,0)
        self.pdf.set_font("helvetica", "B", 8.0)

        self.pdf.set_xy(20, 89)
        self.pdf.cell(ln=0, h=5.5, align="L", w=42.5, txt=get_from_nested(sample, "analysis_request.client_request_id"), border=0, fill=False)
        self.pdf.set_xy(62.5, 89)
        self.pdf.cell(ln=0, h=5.5, align="L", w=42.5, txt=get_from_nested(sample, "date_collected"), border=0, fill=False)
        self.pdf.set_xy(105, 89)
        self.pdf.cell(ln=0, h=5.5, align="L", w=42.5, txt=get_from_nested(sample, "date_received"), border=0, fill=False)
        self.pdf.set_xy(147.5, 89)
        self.pdf.cell(ln=0, h=5.5, align="L", w=42.5, txt=get_from_nested(sample, "date_published"), border=0, fill=False)
        
        self.pdf.set_text_color(255,255,255)

        # Sample and Analysis Info
        self.pdf.set_text_color(255,255,255)
        self.pdf.set_font("helvetica", "B", 10.0)

        _p = ", ".join(profiles)
        _a = ", ".join(analyses)
        investigations = _p
        if _a:
            investigations += ", " + _a

        self.pdf.set_xy(20,100) 
        self.pdf.cell(ln=0, h=4.5, align="L", w=42.5, txt="Cliente", border=0, fill=True)
        self.pdf.set_xy(62.5, 100)
        self.pdf.cell(ln=0, h=4.5, align="L", w=42.5, txt="Descripcion Muestra", border=0, fill=True)
        self.pdf.set_xy(105, 100)
        self.pdf.cell(ln=0, h=4.5, align="L", w=85, txt="Analsis Solicitado", border=0, fill=True)


        self.pdf.set_text_color(0,0,0)
        self.pdf.set_font("helvetica", "B", 8.0)

        self.pdf.set_xy(20, 104)
        self.pdf.cell(ln=0, h=5.5, align="L", w=42.5, txt=get_from_nested(client, "name").upper(), border=0, fill=False)
        self.pdf.set_xy(62.5, 104)
        self.pdf.cell(ln=0, h=5.5, align="L", w=42.5, txt=get_from_nested(sample, "sample_type.name").upper(), border=0, fill=False)
        self.pdf.set_xy(105, 104)
        self.pdf.multi_cell(ln=0, h=5.5, align="L", w=85, txt=investigations.upper(), border=0, fill=False)

        # Results Heading
        self.pdf.set_text_color(255,255,255)
        self.pdf.set_font("helvetica", "B", 10.0)

        self.pdf.set_xy(20, 120)
        self.pdf.cell(ln=0, h=7, align="L", w=42.5, txt="Parametro", border=0, fill=True)
        self.pdf.set_xy(62.5, 120)
        self.pdf.cell(ln=0, h=7, align="C", w=42.5, txt="Resultado", border=0, fill=True)
        self.pdf.set_xy(105, 120)
        self.pdf.cell(ln=0, h=7, align="C", w=42.5, txt="Unidad", border=0, fill=True)
        self.pdf.set_xy(147.5, 120)
        self.pdf.cell(ln=0, h=7, align="C", w=42.5, txt="Rango", border=0, fill=True)

        self.pdf.set_text_color(0,0,0)
        self.pdf.set_font("helvetica", "B", 8.0)

        #self.pdf.set_font("helvetica", "B", 10.0)
        #self.pdf.set_text_color(255,255,255)
        #self.pdf.set_xy(20, 75)
        #self.pdf.cell(ln=0, h=5.5, align="L", w=42.5, txt="Parametro", border=0, fill=True)
        #self.pdf.set_xy(62.5, 75)
         #self.pdf.cell(ln=0, h=5.5, align="C", w=42.5, txt="Resultado", border=0, fill=True)
         #self.pdf.set_xy(105, 75)
         #self.pdf.cell(ln=0, h=5.5, align="C", w=42.5, txt="Unidad", border=0, fill=True)
         #self.pdf.set_xy(147.5, 75)
        # self.pdf.cell(ln=0, h=5.5, align="C", w=42.5, txt="Rango", border=0, fill=True)
         #self.pdf.set_text_color(0,0,0)

        # Results
        y_pos = 127

        analyses_results = get_from_nested(sample, "analysis_results")
        analyses_results = list(
            filter(
                lambda r: strtobool(get_from_nested(r, "reportable")), analyses_results
            )
        )

        for result in analyses_results:
             self.pdf.set_font("helvetica", "", 8.0)
             self.pdf.set_xy(20, y_pos)
             self.pdf.cell(ln=0,h=5.5,align="L",w=42.5,txt=get_from_nested(result, "analysis.name"),border=0,)
             self.pdf.set_xy(62.5, y_pos)
             self.pdf.cell(ln=0,h=5.5,align="C",w=42.5,txt=get_from_nested(result, "result"),border=0,)
             self.pdf.set_xy(105, y_pos)
             self.pdf.cell(ln=0,h=5.5,align="C",w=42.5,txt=get_from_nested(result, "analysis.unit.name"),border=0,)
             self.pdf.set_xy(147.5, y_pos)

             limites= (get_from_nested(result, "coding.code")+ "-"+ get_from_nested(result, "coding.name"))


             self.pdf.cell(ln=0, h=5.5, align="C", w=42.5, txt=limites, border=0)
            # ---
             y_pos += 2
            #inst_meth = f"{get_from_nested(result, 'laboratory_instrument.lab_name')} | {get_from_nested(result, 'method.name')}"
            #self.pdf.set_font("helvetica", "I", 6.0)
            #self.pdf.set_xy(20, y_pos)
            #self.pdf.cell(ln=0, h=5.5, align="L", w=10.0, txt=inst_meth, border=0)
            # ---
             y_pos += 2

             if y_pos >= (self.pdf_h - self.margin_top * 3):
                self.pdf.add_page()
                y_pos = self.margin_top


        # End of report
        self.pdf.set_text_color(0,0,0)
        self.pdf.set_line_width(0.0)
        self.pdf.line(20.0, y_pos, 190.0, y_pos)
        self.pdf.set_font("helvetica", "I", 8.0)
        self.pdf.set_xy(170, y_pos)
        self.pdf.cell(ln=0, h=5.5, align="R", w=10.0, txt="* Fin de reporte", border=0)

        # --- Quality Statement
        self.pdf.set_line_width(0.0)
        self.pdf.line(15.0, 265.0, 195.0, 265.0)
        self.pdf.set_font("helvetica", "I", 8.0)
        self.pdf.set_xy(162, 265)
        self.pdf.cell(ln=0,h=5.5,align="R",w=20.0,txt=f"Generado: {self.time_now}",border=0,)

        return self.pdf

    async def generate(self, sample: dict, report_state="final"):
        pdf = await self._make(sample, report_state)
        return pdf.output()
