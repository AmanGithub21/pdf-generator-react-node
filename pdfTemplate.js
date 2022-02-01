module.exports = ({ name, likes }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>test</title>
    </head>
    <body>
    <div className="print-component-container">
      <h1>Hello My name is ${name}. </h1>

      <h3>
        And you like to <i>${likes}</i> 
      </h3>

      <p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pauca mutat
          vel plura sane; <i>Tria genera bonorum;</i> Si quicquam extra virtutem
          habeatur in bonis. Hoc ille tuus non vult omnibusque ex rebus
          voluptatem quasi mercedem exigit. Qua tu etiam inprudens utebare non
          numquam. 
          <a href="http://loripsum.net/" target="_blank">
            Duo Reges: constructio interrete.
          </a> 
        </p>

        <p>
          Tu enim ista lenius, hic Stoicorum more nos vexat. Tantum dico, magis
          fuisse vestrum agere Epicuri diem natalem, quam illius testamento
          cavere ut ageretur. Tantum dico, magis fuisse vestrum agere Epicuri
          diem natalem, quam illius testamento cavere ut ageretur. Septem autem
          illi non suo, sed populorum suffragio omnium nominati sunt. Aliam vero
          vim voluptatis esse, aliam nihil dolendi, nisi valde pertinax fueris,
          concedas necesse est. 
        </p>

<p>Pdf generation successfull </p>

      
    
      </p>
    </div>
    </body>
    </html>
`;
};
