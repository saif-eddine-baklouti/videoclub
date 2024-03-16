import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Accueil from "./Accueil";

import infosAccueil from "./Accueil.json";

    test('Vérifie la présence de chaque paragraphe du contenu de l\'accueil dans le document', () => {

        render(<Accueil />);
        
        infosAccueil.forEach(paragraphe => {
            
            expect(screen.getByText(paragraphe)).toBeInTheDocument();
        });
    });
    
