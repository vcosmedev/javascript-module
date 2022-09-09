// Generar función constructora que nos ayude a crear dinosaurios
// Tipo de alimentación -> feeding, carnivorous / herbivores
// Época -> Era
// Habitat
    // Método-acción -> rugir


    function Dinosaur(feeding, era, habitat) {
        this.feeding = feeding;
        this.era = era;
        this.habitat = habitat;
        this.roar = (noise) => {
            return 'Soy un dinosaurio y cuando estoy en peligro rujo tal que así: ' + noise + '.';
        } 
    }
    
    let trexDinosaur = new Dinosaur('Carnivorous', 'Late Cretaceous', 'areas with high humidity and semi-tropical temperatures'); // Entrega del lápiz
    let trexRoar = trexDinosaur.roar('Raaaaaaawr'); // Realización de la acción, es decir, rugir
    console.log(trexDinosaur); // Expected output: {feeding: 'Carnivorous', era: 'Late Cretaceous', habitat: 'areas with high humidity and semi-tropical temperatures', roar: ƒ}     
    console.log(trexRoar); // Este sonido lo hizo el dinosaurio con su habilidad de rugir.