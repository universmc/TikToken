pragma solidity >=0.8.0;

// SPDX-License-Identifier: MIT

contract umcTokens {
    // Créer un mapping pour suivre les balances de chaque utilisateur
    mapping(address => uint256) public balanceOf;

    // Déclarer un événement pour la création de jetons UMC
    event Transfer(address indexed from, address indexed to, uint256 amount);

    // Constructeur du contrat
    constructor() {
        // Allouer des jetons UMC au déploiement du contrat
        balanceOf[msg.sender] = 1000000;
    }

    // Fonction pour transférer des jetons UMC à un autre utilisateur
    function transfer(address recipient, uint256 amount) public returns (bool) {
        // Vérifier que le montant à transférer est disponible
        if (balanceOf[msg.sender] < amount) return false;

        // Réduire la balance de l'expéditeur
        balanceOf[msg.sender] -= amount;

        // Augmenter la balance du destinataire
        balanceOf[recipient] += amount;

        // Déclencher l'événement Transfer
        emit Transfer(msg.sender, recipient, amount);

        // Retourner la réussite de la transaction
        return true;
    }
}
