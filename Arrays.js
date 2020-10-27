//Arrays
const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
const newGenes = []

const firstTwo = genes.splice(0, 2)
const lastGene = genes.splice(genes.length - 1)

newGenes.push(...firstTwo)
newGenes.push(...lastGene)
newGenes.push(genes[0])
newGenes.push(genes[genes.length - 1], genes[genes.length - 1]) 
newGenes.unshift("FXT")

console.log(newGenes)
//***********************************************************************************************************************************