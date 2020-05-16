// episode3
            //création des deux variable afin de demander à l'utilisateurs de renseigner ses infos
            var username=prompt('Veuillez saisir votre nom svp'),
            userchild=parseInt(prompt("Combien d'enfants avez-svp?"));
            alert(username + ', vous avez '+userchild + ' enfants');

// episode6
            //demandons à l'utilisateur de renseigner le num du jour
            var daynumber = parseInt(prompt("Veuillez saisir le numéro du jour svp"));
            // création du tableau
           var jours=['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
           // Afficher le resultat
            document.write(jours[daynumber]);

// episode9
        // Entrez le nombre
           var multiplicatif=parseInt(prompt('Veuillez entrer un nombre svp'));
            for(multiplication=1; multiplication<12; multiplication++){
        //afficher le resultat de la multipication
            document.write(multiplicatif + '*'+ multiplication + '=' + multiplication * multiplicatif);
            } 