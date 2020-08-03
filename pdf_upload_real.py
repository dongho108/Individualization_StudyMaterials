import os
from PyPDF2 import PdfFileReader, PdfFileWriter

file_name = "2020_6_2_handmade_"
file_index = ['18', '19', '20', '21', '22', '23', '24', '25', '26', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41~42_1', '41~42_2', '43~45_1', '43~45_2']
original_path = r'/Users/dongho/Desktop/testpdf'
original_file_name = "test.pdf"
new_path = r'/Users/dongho/Desktop/newpdf'

def file_division(file_name, file_index, original_path, original_file_name, new_path):
    item_path = os.path.join(original_path, original_file_name)
    print(item_path)
    pdf = PdfFileReader(open(item_path, 'rb'))

    numberPages = pdf.getNumPages()

    for page in range(0, numberPages):
        pdf_writer = PdfFileWriter()
        pdf_writer.addPage(pdf.getPage(page))

        output_name = file_name+file_index[page]+".pdf"
        save_path = os.path.join(new_path, output_name)

        with open(save_path, 'wb') as f:
            pdf_writer.write(f)

file_division(file_name, file_index, original_path, original_file_name, new_path)
