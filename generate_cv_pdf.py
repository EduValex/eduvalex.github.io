#!/usr/bin/env python3
"""
Generador de CV en PDF desde cv-data.json
"""
import json
from reportlab.lib.pagesizes import letter, A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT, TA_JUSTIFY
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

def create_cv_pdf():
    # Cargar datos
    with open('shared/data/cv-data.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    personal = data['personal']
    about = data['about']['es']
    experience = data['experience']
    education = data['education']
    skills = data['skills']

    # Crear PDF
    pdf_file = "CV-Eduardo-Valenzuela.pdf"
    doc = SimpleDocTemplate(pdf_file, pagesize=A4,
                            rightMargin=50, leftMargin=50,
                            topMargin=50, bottomMargin=50)

    # Estilos
    styles = getSampleStyleSheet()

    # Estilo personalizado para el nombre
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=24,
        textColor=colors.HexColor('#1e40af'),
        spaceAfter=6,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold'
    )

    # Estilo para el título profesional
    subtitle_style = ParagraphStyle(
        'CustomSubtitle',
        parent=styles['Normal'],
        fontSize=12,
        textColor=colors.HexColor('#4b5563'),
        spaceAfter=12,
        alignment=TA_CENTER,
        fontName='Helvetica'
    )

    # Estilo para secciones
    section_style = ParagraphStyle(
        'SectionTitle',
        parent=styles['Heading2'],
        fontSize=14,
        textColor=colors.HexColor('#1e40af'),
        spaceAfter=8,
        spaceBefore=12,
        fontName='Helvetica-Bold',
        borderWidth=0,
        borderPadding=0,
        borderColor=colors.HexColor('#1e40af'),
        borderRadius=0,
        leftIndent=0,
        rightIndent=0,
    )

    # Estilo para company/institution
    company_style = ParagraphStyle(
        'Company',
        parent=styles['Normal'],
        fontSize=11,
        textColor=colors.HexColor('#111827'),
        fontName='Helvetica-Bold',
        spaceAfter=2,
    )

    # Estilo para posición
    position_style = ParagraphStyle(
        'Position',
        parent=styles['Normal'],
        fontSize=10,
        textColor=colors.HexColor('#4b5563'),
        fontName='Helvetica-Oblique',
        spaceAfter=4,
    )

    # Estilo normal
    normal_style = ParagraphStyle(
        'CustomNormal',
        parent=styles['Normal'],
        fontSize=9,
        textColor=colors.HexColor('#374151'),
        spaceAfter=6,
        alignment=TA_JUSTIFY,
    )

    # Estilo para bullets
    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontSize=9,
        textColor=colors.HexColor('#374151'),
        leftIndent=20,
        spaceAfter=3,
    )

    # Construir contenido
    story = []

    # Header
    story.append(Paragraph(personal['name'], title_style))
    story.append(Paragraph(personal['title'], subtitle_style))

    # Información de contacto
    contact_info = f"{personal['email']} | {personal['phone']} | {personal['location']}"
    story.append(Paragraph(contact_info, subtitle_style))
    story.append(Spacer(1, 0.2*inch))

    # Sobre mí (resumido)
    story.append(Paragraph("PERFIL PROFESIONAL", section_style))
    # Tomar solo el primer párrafo del about
    about_short = about.split('\n\n')[0]
    story.append(Paragraph(about_short, normal_style))
    story.append(Spacer(1, 0.15*inch))

    # Experiencia
    story.append(Paragraph("EXPERIENCIA PROFESIONAL", section_style))
    for exp in experience:
        # Company y período
        company_period = f"<b>{exp['company']}</b> | {exp['period']}"
        story.append(Paragraph(company_period, company_style))

        # Posición y ubicación
        position_location = f"{exp['position']} - {exp['location']}"
        story.append(Paragraph(position_location, position_style))

        # Descripción
        story.append(Paragraph(exp['description'], normal_style))

        # Logros
        if exp.get('achievements'):
            for achievement in exp['achievements'][:3]:  # Max 3 logros
                story.append(Paragraph(f"• {achievement}", bullet_style))

        # Tecnologías
        if exp.get('technologies'):
            tech_str = ", ".join(exp['technologies'][:8])  # Max 8 tech
            story.append(Paragraph(f"<i>Tecnologías: {tech_str}</i>", bullet_style))

        story.append(Spacer(1, 0.1*inch))

    # Educación
    story.append(PageBreak())
    story.append(Paragraph("EDUCACIÓN Y CERTIFICACIONES", section_style))
    for edu in education:
        edu_title = f"<b>{edu['institution']}</b> | {edu['period']}"
        story.append(Paragraph(edu_title, company_style))

        degree_field = f"{edu['degree']}"
        story.append(Paragraph(degree_field, position_style))

        if edu.get('description'):
            story.append(Paragraph(edu['description'], normal_style))

        story.append(Spacer(1, 0.1*inch))

    # Skills
    story.append(Paragraph("HABILIDADES TÉCNICAS", section_style))

    # Frontend
    frontend_skills = [s['name'] for s in skills['frontend'] if s['level'] >= 75]
    story.append(Paragraph(f"<b>Frontend:</b> {', '.join(frontend_skills)}", normal_style))

    # Backend
    backend_skills = [s['name'] for s in skills['backend'] if s['level'] >= 75]
    story.append(Paragraph(f"<b>Backend:</b> {', '.join(backend_skills)}", normal_style))

    # Databases
    db_skills = [s['name'] for s in skills['tools']['databases'] if s['level'] >= 80]
    story.append(Paragraph(f"<b>Databases:</b> {', '.join(db_skills)}", normal_style))

    # Tools
    seo_skills = [s['name'] for s in skills['tools']['seoAnalytics'] if s['level'] >= 80]
    story.append(Paragraph(f"<b>SEO & Analytics:</b> {', '.join(seo_skills)}", normal_style))

    # Dev Tools
    dev_tools = [s['name'] for s in skills['tools']['devTools'] if s['level'] >= 85]
    story.append(Paragraph(f"<b>Herramientas:</b> {', '.join(dev_tools)}", normal_style))

    # AI
    ai_skills = [s['name'] for s in skills['ai'] if s['level'] >= 90]
    story.append(Paragraph(f"<b>IA & Asistentes:</b> {', '.join(ai_skills)}", normal_style))

    story.append(Spacer(1, 0.15*inch))

    # Footer
    footer_text = f"Portfolio: {personal['social']['portfolio']} | GitHub: github.com/{personal['social']['github']} | LinkedIn: linkedin.com/in/{personal['social']['linkedin']}"
    footer_style = ParagraphStyle(
        'Footer',
        parent=styles['Normal'],
        fontSize=8,
        textColor=colors.HexColor('#6b7280'),
        alignment=TA_CENTER,
    )
    story.append(Paragraph(footer_text, footer_style))

    # Generar PDF
    doc.build(story)
    print(f"✅ PDF generado: {pdf_file}")

if __name__ == "__main__":
    create_cv_pdf()
