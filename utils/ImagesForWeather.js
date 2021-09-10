const images = { 
    'background': require('../assets/gas-background.png'),
    'logo': require('../assets/leak-gas-logo.png'),
    'logo-transparente': require('../assets/leak-gas-logo-transparente.png'),
};
export default function getImage(image) { 
    return images[image]; 
}