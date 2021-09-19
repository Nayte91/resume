import "./PDFButton.scss"

const PDFButton: React.FC<{pdflink: string}> = ({pdflink}) => <a href={pdflink} className="button__pdf">Téléchargez mon CV</a>

export default PDFButton