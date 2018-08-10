import LocalizedStrings from 'react-localization'

const strings = new LocalizedStrings({
  FI: {
    search: 'Hae...',
    SCD_diet: 'SCD Ruokavalio',

    SCD_en_website: 'SCD kotisivut',
    SCD_fi_website: 'SCD suomalaiset kotisivut',
    SCD_studies: 'Tutkimuksia SCD ruokavaliosta',
    SCD_association: 'SCD yhdistys',
    SCD_communities: 'SCD vertaistukiryhmiä',
    betaDisclaimer: 'HUOM! Sivusto on keskeneräinen ja saattaa sisältää asiavirheitä. Tarkista aina tältä sivustolta saatu tieto SCD-ruokavalion virallisilta kotisivuilta: ',
    careDisclaimer: 'Sivuston tarkoituksena ei ole hoitaa tai diagnosoida kenenkään sairautta. Jos koet olevasi sairas, käänny osaavan alan ammattilaisen puoleen.',
    emailUs: 'Ota yhteyttä',
    modal_txt: `Tämä sivusto on tarkoitettu tukemaan SCD ruokavalion noudattamista. Parhaiden tulosten saamiseksi kannattaa lukea Elaine Gottschallin kirjoittaman Breaking The Vicious Cycle kirja. Sivuston sisältämä tieto ei yksin riitä ruokavalion noudattamiseen.

Sivuston tarkoitus ei ole korvata lääkehoitoa eikä terveydenhuollon ammattilaisia, eikä diagnosoida tai hoitaa kenenkään sairautta. Jos koet olevasi sairas, mene lääkäriin.
    
Sivusto on aikaisessa vaiheessa. Kaikki bugit, parannukset, käännös-, ja asiavirheet otetaan mielellään vastaan osoitteessa scd.app.contact@gmail.com
    
Käytäthän sivustoa vastuullisesti. Kiitos!`,
    modal_header: 'Lue tämä!',
    accept: 'Hyväksy',
  },
  EN: {
    search: 'Search...',
    SCD_diet: 'SCD Diet',

    SCD_en_website: 'SCD Website',
    SCD_fi_website: 'SCD finnish Website',
    SCD_studies: 'SCD Diet Studies',
    SCD_association: 'SCD Association',
    SCD_communities: 'SCD Communities',
    betaDisclaimer: 'Warning! This website is work in progress. As a result, it might contain invalid or incomplete information. Always verify information at the official SCD website at: ',
    careDisclaimer: 'Sivuston tarkoituksena ei ole hoitaa tai diagnosoida kenenkään sairautta. Jos koet olevasi sairas, käänny osaavan alan ammattilaisen puoleen.',
    emailUs: 'Email us',
    modal_txt: `This website is meant to help people follow the SCD diet. To get the best results on the diet please read the book Breaking the Vicious Cycle by Elaine Gottschall. Information on this site alone is not enough to follow the diet adequately.

This website is not meant to replace medicine or healthcare professionals, nor is it meant to diagnose or treat any disease. If you feel sick, go to a healthcare practitioner.
    
The website is in a early phase so please report any bugs, spelling errors or factual corrections to scd.app.contact@gmail.com.
    
Please enjoy the site responsibly. Thank you!`,
    modal_header: 'Read this!',
    accept: 'Accept',
  },
})


export default strings
