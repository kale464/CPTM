
import { Upgrade } from "../types"

function createAutoClicker(name: string, description: string, cost: number, cps: number) {
    return new Upgrade(
        name,
        description,
        "autoclicker",
        cost,
        (upgrade, context) => { context.setAutoCookies((current: number) => current + cps) }
    );
}

export const upgrades: Upgrade[]  = [
    createAutoClicker("Berceuse", "Roduit donne sa théorie, abscence mentale des élèves", 15, 0.1),
    createAutoClicker("NO BREAKS", "Genolet gère sa boucle infinie de génération d'abscences", 100, 1),
    createAutoClicker("Borettisme", "Les cultistes de Boretti prient pour avoir des abscences", 1100, 8),
    createAutoClicker("Convocation", "Rausis te convoque mais te rajoutes des abscences", 12000, 47),
    createAutoClicker("Escadhack", "Les élèves piratent Escada pour se rajouter des abscences", 130000, 260),
    createAutoClicker("Secrétaire fatiguée", "Les secrétaires oublient d'enregistrer les abscences", 1400000, 1400),
    createAutoClicker("Retard", "Les élèves arrivent en retard ce qui donne des abscences", 20000000, 7800),
    createAutoClicker("Salle 404", "Une salle inexistante dans le bâtiment donc les cours n'ont pas lieu", 330000000, 44000),
    createAutoClicker("Parents complotistes", "Des parents ne laissent pas leurs enfants aller en cours", 5100000000, 260000),
    createAutoClicker("Contestation", "Tu dénonces l'injustice, ça va uniquement te rajouter des abscences...", 75000000000, 1600000),
    createAutoClicker("Salles inversées", "Les numéros des salles sont inversés, pagaille général dans les couloirs", 1000000000000, 10000000),
    createAutoClicker("Discussion", "Tu discutais simplement avec un camarade, des abscences sont le prix à payer", 14000000000000, 65000000)
]