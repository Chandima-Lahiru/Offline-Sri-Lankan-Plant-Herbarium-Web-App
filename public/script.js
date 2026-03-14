// Initial Data for Sri Lankan Herbarium
const defaultPlants = [
    { id: 1, name: "Beli", scientificName: "Aegle marmelos", uses: "Excellent for digestion and cooling the body. The fruit is used for making refreshing drinks and treating dysentery.", category: "Medicinal" },
    { id: 2, name: "Kohomba", scientificName: "Azadirachta indica", uses: "Powerful antimicrobial properties. Used for skin conditions, dental care, and as a natural pesticide.", category: "Medicinal" },
    { id: 3, name: "Karapincha", scientificName: "Murraya koenigii", uses: "Essential culinary herb. Used for flavoring, improving digestion, and managing cholesterol levels.", category: "Culinary" },
    { id: 4, name: "Gotu Kola", scientificName: "Centella asiatica", uses: "Known for boosting brain health and memory. Used in 'Sambola' salads and for skin healing.", category: "Medicinal" },
    { id: 5, name: "Iramusu", scientificName: "Hemidesmus indicus", uses: "Blood purifier and body coolant. Often consumed as a herbal tea for skin health and detoxification.", category: "Medicinal" },
    { id: 6, name: "Rath Goraka", scientificName: "Garcinia quaesita", uses: "Used as a souring agent in Sri Lankan curries. Known for weight management properties and reducing cholesterol.", category: "Culinary" },
    { id: 7, name: "Ela Goraka", scientificName: "Garcinia zeylanica", uses: "Traditional spice for fish curries. Possesses strong antimicrobial and antioxidant properties.", category: "Culinary" },
    { id: 8, name: "Wal Del", scientificName: "Artocarpus nobilis", uses: "The seeds are boiled or roasted for consumption. Bark and leaves are used to treat asthma and skin diseases.", category: "Endemic" },
    { id: 9, name: "Sewala Kurundu", scientificName: "Cinnamomum dubium", uses: "A wild cinnamon variety used for its aromatic properties and in traditional digestive remedies.", category: "Endemic" },
    { id: 10, name: "Madol", scientificName: "Garcinia thwaitesii", uses: "Fruit rinds are used as a souring agent. Also used in traditional treatments for stomachic disorders.", category: "Endemic" },
    { id: 11, name: "Polpala", scientificName: "Aerva lanata", uses: "Effective for kidney stones and urinary tract infections. Acts as a powerful diuretic.", category: "Medicinal" },
    { id: 12, name: "Ranawara", scientificName: "Senna auriculata", uses: "Commonly used as a herbal tea for managing diabetes and reducing body heat.", category: "Medicinal" },
    { id: 13, name: "Rasakinda", scientificName: "Tinospora cordifolia", uses: "Boosts the immune system and is used to treat chronic fever and skin ailments.", category: "Medicinal" },
    { id: 14, name: "Venivel", scientificName: "Coscinium fenestratum", uses: "Antibacterial properties. Used for treating skin infections and body aches.", category: "Medicinal" },
    { id: 15, name: "Pawatta", scientificName: "Justicia adhatoda", uses: "Relieves respiratory issues such as asthma, coughs, and bronchitis.", category: "Medicinal" },
    { id: 16, name: "Nelli", scientificName: "Phyllanthus emblica", uses: "Rich source of Vitamin C. Enhances immunity and promotes hair growth and digestion.", category: "Medicinal" },
    { id: 17, name: "Aralu", scientificName: "Terminalia chebula", uses: "Used as a mild laxative and for improving digestion and wound healing.", category: "Medicinal" },
    { id: 18, name: "Bulu", scientificName: "Terminalia bellirica", uses: "Supports digestive health and is used in treatments for coughs and hair vitality.", category: "Medicinal" },
    { id: 19, name: "Kumbuk", scientificName: "Terminalia arjuna", uses: "Promotes heart health and is used to treat fractures and skin diseases.", category: "Medicinal" },
    { id: 20, name: "Inguru", scientificName: "Zingiber officinale", uses: "Commonly used for nausea, digestion, colds, and reducing inflammation.", category: "Culinary" },
    { id: 21, name: "Sudulunu", scientificName: "Allium sativum", uses: "Helps manage cholesterol and blood pressure levels. Supports heart health.", category: "Culinary" },
    { id: 22, name: "Gammiris", scientificName: "Piper nigrum", uses: "Used for treating coughs, colds, and improving digestion and metabolism.", category: "Culinary" },
    { id: 23, name: "Tippili", scientificName: "Piper longum", uses: "Effective for respiratory issues, digestive health, and managing fever.", category: "Medicinal" },
    { id: 24, name: "Enasal", scientificName: "Elettaria cardamomum", uses: "Flavoring agent for curries. Used for digestion and as a breath freshener.", category: "Culinary" },
    { id: 25, name: "Sadikka", scientificName: "Myristica fragrans", uses: "Used for digestive health, as a sleep aid, and for pain relief.", category: "Culinary" },
    { id: 26, name: "Kaha", scientificName: "Curcuma longa", uses: "Powerful anti-inflammatory and antiseptic. Used for skin health and as a spice.", category: "Culinary" },
    { id: 27, name: "Komarika", scientificName: "Aloe vera", uses: "Used for skin burns, digestive health, and hair care. Provides a cooling effect.", category: "Medicinal" },
    { id: 28, name: "Hathawariya", scientificName: "Asparagus racemosus", uses: "Supports female reproductive health and is used as a general tonic.", category: "Medicinal" },
    { id: 29, name: "Bin-kohomba", scientificName: "Munronia pinnata", uses: "Highly valued for blood purification and treating fever and skin diseases.", category: "Medicinal" },
    { id: 30, name: "Wel-penela", scientificName: "Cardiospermum halicacabum", uses: "Used for nerve health, promoting hair growth, and relieving joint pain.", category: "Medicinal" },
    { id: 31, name: "Erabadu", scientificName: "Erythrina variegata", uses: "Traditional remedy for worm infections and menstrual disorders.", category: "Medicinal" },
    { id: 32, name: "Murunga", scientificName: "Moringa oleifera", uses: "Highly nutritious. Used for managing blood pressure and joint pain.", category: "Culinary" },
    { id: 33, name: "Katuru-murunga", scientificName: "Sesbania grandiflora", uses: "Leaves are used in salads for eye health and treating mouth ulcers.", category: "Culinary" },
    { id: 34, name: "Akkapana", scientificName: "Kalanchoe pinnata", uses: "Used for dissolving kidney stones and treating wounds and inflammation.", category: "Medicinal" },
    { id: 35, name: "Babila", scientificName: "Sida rhombifolia", uses: "Used in traditional treatments for nerve disorders and rheumatism.", category: "Medicinal" },
    { id: 36, name: "Vishnukranthiya", scientificName: "Evolvulus alsinoides", uses: "Considered a brain tonic for improving memory and treating fever.", category: "Medicinal" },
    { id: 37, name: "Nil-awari", scientificName: "Indigofera tinctoria", uses: "Used as a natural hair dye and for promoting hair growth and skin health.", category: "Medicinal" },
    { id: 38, name: "Rath-handun", scientificName: "Pterocarpus santalinus", uses: "Red Sandalwood is used for skin glow, cooling, and reducing inflammation.", category: "Medicinal" },
    { id: 39, name: "Sudu-handun", scientificName: "Santalum album", uses: "Sandalwood is prized for skin health, cooling effects, and mental clarity.", category: "Medicinal" },
    { id: 40, name: "Devadara", scientificName: "Cedrus deodara", uses: "Used for pain relief and treating inflammation and skin diseases.", category: "Medicinal" },
    { id: 41, name: "Gammalu", scientificName: "Pterocarpus marsupium", uses: "Known for managing diabetes and treating skin diseases and diarrhea.", category: "Medicinal" },
    { id: 42, name: "Mee", scientificName: "Madhuca longifolia", uses: "Used for treating skin diseases, joint pain, and as a remedy for snake bites.", category: "Medicinal" },
    { id: 43, name: "Domba", scientificName: "Calophyllum inophyllum", uses: "Oil is used for skin diseases and rheumatism. Also used for hair care.", category: "Medicinal" },
    { id: 44, name: "Na", scientificName: "Mesua ferrea", uses: "The national tree of Sri Lanka. Used for bleeding disorders and skin diseases.", category: "Endemic" },
    { id: 45, name: "Sapu", scientificName: "Michelia champaca", uses: "Used for treating fever, skin diseases, and vertigo.", category: "Medicinal" },
    { id: 46, name: "Et-demata", scientificName: "Gmelina arborea", uses: "Supports digestive health and is used as a tonic for nerve health.", category: "Medicinal" },
    { id: 47, name: "Lunu-warana", scientificName: "Crateva religiosa", uses: "Effective for urinary stones and reducing inflammation.", category: "Medicinal" },
    { id: 48, name: "Diya-mitta", scientificName: "Cissampelos pareira", uses: "Used for treating fever, improving digestion, and wound healing.", category: "Medicinal" },
    { id: 49, name: "Kapuru-walliya", scientificName: "Plectranthus amboinicus", uses: "Commonly used for treating coughs, colds, and asthma in children.", category: "Medicinal" },
    { id: 50, name: "Kiribadu", scientificName: "Ipomoea mauritiana", uses: "Used as a general tonic and for promoting rejuvenation.", category: "Medicinal" },
    { id: 51, name: "Girithilla", scientificName: "Argyreia nervosa", uses: "Used in traditional medicine for skin diseases and as a nerve tonic.", category: "Medicinal" },
    { id: 52, name: "Aswagandha", scientificName: "Withania somnifera", uses: "Adaptogen used for stress, strength, immunity, and improving sleep.", category: "Medicinal" },
    { id: 53, name: "Heen-araththa", scientificName: "Alpinia calcarata", uses: "Used for respiratory issues, digestive health, and relieving joint pain.", category: "Medicinal" },
    { id: 54, name: "Maha-araththa", scientificName: "Alpinia galanga", uses: "Supports digestion and respiratory health. Also used for skin ailments.", category: "Medicinal" },
    { id: 55, name: "Kasthuri-kaha", scientificName: "Curcuma aromatica", uses: "Widely used for skin diseases and in cosmetic preparations for its antiseptic properties.", category: "Medicinal" },
    { id: 56, name: "Harankaha", scientificName: "Curcuma zedoaria", uses: "Used for improving digestion and as a blood purifier.", category: "Medicinal" },
    { id: 57, name: "Amba-kaha", scientificName: "Curcuma amada", uses: "Has a mango-like aroma. Used for digestion and skin health.", category: "Culinary" },
    { id: 58, name: "Sewendara", scientificName: "Vetiveria zizanioides", uses: "Used for cooling the body and treating anxiety and skin issues.", category: "Medicinal" },
    { id: 59, name: "Wadakaha", scientificName: "Acorus calamus", uses: "Used for speech disorders, improving memory, and digestive health.", category: "Medicinal" },
    { id: 60, name: "Rath-mal", scientificName: "Ixora coccinea", uses: "Used for skin diseases, dysentery, and maintaining eye health.", category: "Medicinal" },
    { id: 61, name: "Pichcha", scientificName: "Jasminum officinale", uses: "Used for its cooling properties and in treating stress and skin health.", category: "Medicinal" },
    { id: 62, name: "Saman-pichcha", scientificName: "Jasminum grandiflorum", uses: "Used for treating mouth ulcers and skin diseases. Provides cooling.", category: "Medicinal" },
    { id: 63, name: "Idda", scientificName: "Wrightia antidysenterica", uses: "Effective for skin diseases and managing digestion and diarrhea.", category: "Medicinal" },
    { id: 64, name: "Wal-idda", scientificName: "Holarrhena pubescens", uses: "Traditional remedy for some bacterial conditions and various skin conditions.", category: "Medicinal" },
    { id: 65, name: "Attana", scientificName: "Datura metel", uses: "Used for asthma and pain relief, but requires extreme caution due to toxicity.", category: "Medicinal" },
    { id: 66, name: "Niyangala", scientificName: "Gloriosa superba", uses: "Used for treating skin diseases, though the plant is highly toxic.", category: "Medicinal" },
    { id: 67, name: "Heen-thala", scientificName: "Ocimum tenuiflorum", uses: "Holy Basil; used for coughs, colds, boosting immunity, and reducing stress.", category: "Medicinal" },
    { id: 68, name: "Maduruthala", scientificName: "Ocimum gratissimum", uses: "Used as a natural mosquito repellent and for treating skin diseases.", category: "Medicinal" },
    { id: 69, name: "Kalu-thala", scientificName: "Ocimum sanctum", uses: "Supports respiratory health and is used for fever and immunity.", category: "Medicinal" },
    { id: 70, name: "Gas-pinnna", scientificName: "Clerodendrum infortunatum", uses: "Commonly used for treating worm infections and skin diseases.", category: "Medicinal" },
    { id: 71, name: "Wal-pinnna", scientificName: "Clerodendrum serratum", uses: "Used for respiratory issues like asthma and chronic coughs.", category: "Medicinal" },
    { id: 72, name: "Heen-bowitiya", scientificName: "Osbeckia octandra", uses: "Highly revered for liver health, jaundice, and managing diabetes.", category: "Endemic" },
    { id: 73, name: "Maha-bowitiya", scientificName: "Osbeckia aspera", uses: "Used in traditional medicine for liver health and skin conditions.", category: "Medicinal" },
    { id: 74, name: "Kothala-himbutu", scientificName: "Salacia reticulata", uses: "Well-known for managing diabetes, obesity, and joint pain.", category: "Medicinal" },
    { id: 75, name: "Wal-ekaweriya", scientificName: "Rauvolfia serpentina", uses: "Used for managing high blood pressure, insomnia, and anxiety.", category: "Medicinal" },
    { id: 76, name: "Rath-nitul", scientificName: "Plumbago indica", uses: "Promotes digestion and is used for skin diseases and inflammation.", category: "Medicinal" },
    { id: 77, name: "Ela-nitul", scientificName: "Plumbago zeylanica", uses: "Used for improving digestive health and treating skin ailments.", category: "Medicinal" },
    { id: 78, name: "Katupila", scientificName: "Flueggea leucopyrus", uses: "Used in traditional cancer support and for promoting wound healing.", category: "Medicinal" },
    { id: 79, name: "Monara-kudumbiya", scientificName: "Vernonia cinerea", uses: "Used for treating fever, urinary tract issues, and skin diseases.", category: "Medicinal" },
    { id: 80, name: "Undupiyaliya", scientificName: "Desmodium triflorum", uses: "Used for treating pimples, skin diseases, and mild diarrhea.", category: "Medicinal" },
    { id: 81, name: "Mukunuwenna", scientificName: "Alternanthera sessilis", uses: "Popular green leaf used for eye health and its cooling properties.", category: "Culinary" },
    { id: 82, name: "Thampala", scientificName: "Amaranthus viridis", uses: "Nutritious leafy green used for improving digestion and cooling.", category: "Culinary" },
    { id: 83, name: "Nivithi", scientificName: "Basella alba", uses: "Ceylon Spinach; used as a mild laxative and for its high nutritional value.", category: "Culinary" },
    { id: 84, name: "Kohila", scientificName: "Lasia spinosa", uses: "Highly recommended for digestive health and traditional remedies.", category: "Culinary" },
    { id: 85, name: "Iriveriya", scientificName: "Plectranthus zeylanicus", uses: "Used for treating fever, vomiting, and diarrhea. Provides cooling.", category: "Medicinal" },
    { id: 86, name: "Sera", scientificName: "Cymbopogon citratus", uses: "Lemongrass; used for digestion and as a remedy for fever and colds.", category: "Culinary" },
    { id: 87, name: "Karabu-neti", scientificName: "Syzygium aromaticum", uses: "Cloves; used for toothaches, improving digestion, and as an antiseptic.", category: "Culinary" },
    { id: 88, name: "Kekiri", scientificName: "Cucumis melo", uses: "Used in curries and for its cooling properties and digestive benefits.", category: "Culinary" },
    { id: 89, name: "Aththora", scientificName: "Senna alata", uses: "Effective for fungal infections, ringworm, and as a laxative.", category: "Medicinal" },
    { id: 90, name: "Kalu-habarala", scientificName: "Alocasia macrorrhizos", uses: "Used in external applications for inflammation and joint pain.", category: "Medicinal" },
    { id: 91, name: "Sudu-habarala", scientificName: "Colocasia esculenta", uses: "The tubers are a source of nutrition. Known for cooling properties.", category: "Culinary" },
    { id: 92, name: "Maha-undupiyaliya", scientificName: "Desmodium gangeticum", uses: "Used for treating fever, respiratory issues, and as a general tonic.", category: "Medicinal" },
    { id: 93, name: "Wal-gammiris", scientificName: "Piper sylvaticum", uses: "Used for improving digestion and supporting respiratory health.", category: "Medicinal" },
    { id: 94, name: "Ekaweriya", scientificName: "Rauvolfia verticillata", uses: "Used for managing blood pressure and reducing anxiety.", category: "Medicinal" },
    { id: 95, name: "Bakmee", scientificName: "Nauclea orientalis", uses: "Used for digestive health, managing fever, and skin diseases.", category: "Medicinal" },
    { id: 96, name: "Aththika", scientificName: "Ficus racemosa", uses: "Used for managing diabetes, skin diseases, and diarrhea.", category: "Medicinal" },
    { id: 97, name: "Claw-flowered laurel", scientificName: "Acronychia pedunculata", uses: "Traditional remedy for skin diseases and wound healing.", category: "Medicinal" },
    { id: 98, name: "Malabar Gulbel", scientificName: "Tinospora malabarica", uses: "Used for boosting immunity and treating fever and skin issues.", category: "Medicinal" },
    { id: 99, name: "Titberry", scientificName: "Allophylus cobbe", uses: "Commonly used for treating fever and stomach aches.", category: "Medicinal" },
    { id: 100, name: "Ironwood Tree", scientificName: "Memecylon capitellatum", uses: "Used for its cooling properties and in treating skin diseases.", category: "Endemic" },
    { id: 101, name: "Kurundu", scientificName: "Cinnamomum zeylanicum", uses: "Ceylon Cinnamon; used for blood sugar control and improving circulation.", category: "Culinary" },
    { id: 102, name: "Kos", scientificName: "Artocarpus heterophyllus", uses: "Jackfruit; a staple food. Leaves and roots are used in traditional remedies.", category: "Culinary" },
    { id: 103, name: "Karonda", scientificName: "Carissa carandas", uses: "The fruit is used for digestion. Also used for fever and skin ailments.", category: "Culinary" },
    { id: 104, name: "Bakini", scientificName: "Melia dubia", uses: "Used for skin diseases, worm infections, and managing fever.", category: "Medicinal" },
    { id: 105, name: "Heen-botiya", scientificName: "Jeffreycia zeylanica", uses: "Used in folk medicine for treating fractures, eczema, and asthma.", category: "Endemic" }
];

// State
let plants = JSON.parse(localStorage.getItem('herbarium_plants')) || defaultPlants;
let recentlyViewed = JSON.parse(localStorage.getItem('herbarium_recent')) || [];
let currentRole = 'user';
let isViewingAll = false;

// Elements
const plantGrid = document.getElementById('plantGrid');
const recentGrid = document.getElementById('recentGrid');
const searchInput = document.getElementById('searchInput');
const plantModal = document.getElementById('plantModal');
const imagePreview = document.getElementById('imagePreview');
const plantForm = document.getElementById('plantForm');

// Core Functions
function init() {
    renderPlants();
    renderRecentlyViewed();
    setupEventListeners();
}

function renderPlants() {
    const term = searchInput.value.toLowerCase();
    plantGrid.innerHTML = '';

    if (term.length === 0 && !isViewingAll) {
        plantGrid.innerHTML = '<p style="grid-column:1/-1; color:#999; text-align:center; padding:40px;">Search for a plant to begin your discovery...</p>';
        return;
    }

    const filtered = plants.filter(p => p.name.toLowerCase().includes(term) || p.scientificName.toLowerCase().includes(term));

    if (currentRole === 'admin' && (isViewingAll || term.length === 0)) {
        plantGrid.appendChild(createAddCard());
    }

    filtered.forEach(p => plantGrid.appendChild(createCard(p)));
}

function createCard(p, small = false) {
    const card = document.createElement('div');
    card.className = 'plant-card';
    const img = p.imageUrl || `https://source.unsplash.com/400x300/?plant,${p.name.split(' ')[0]}`;

    let actions = '';
    if (currentRole === 'admin' && !small) {
        actions = `
            <div class="card-actions">
                <button class="btn btn-card-edit" style="padding:8px 20px; font-size:0.75rem;" onclick="event.stopPropagation(); openEditModal(${p.id})"><i class="fas fa-edit"></i> Edit Record</button>
                <button class="btn btn-danger" style="padding:8px 15px; font-size:0.75rem;" onclick="event.stopPropagation(); deletePlant(${p.id})"><i class="fas fa-trash"></i></button>
            </div>
        `;
    }

    card.innerHTML = `
        <div class="card-image-sm"><img src="${img}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400'"></div>
        <div class="card-body">
            <span class="plant-category">${p.category}</span>
            <h3>${p.name}</h3>
            <span class="scientific-name">${p.scientificName}</span>
            <div class="plant-uses"><p>${p.uses}</p></div>
            ${actions}
        </div>
    `;
    card.onclick = () => showDetail(p);
    return card;
}

function createAddCard() {
    const card = document.createElement('div');
    card.className = 'plant-card add-new-card';
    card.innerHTML = `
        <i class="fas fa-plus-circle" style="font-size:3rem; margin-bottom:15px;"></i>
        <h3 style="font-size:1.2rem;">Add New Record</h3>
        <p style="font-size:0.8rem; opacity:0.7;">Contribute to the Herbarium</p>
    `;
    card.onclick = () => {
        plantForm.reset();
        document.getElementById('plantId').value = '';
        document.getElementById('modalTitle').textContent = 'Add New Plant';
        imagePreview.innerHTML = '<span>Preview</span>';
        plantModal.style.display = 'flex';
        document.body.classList.add('modal-open');
    };
    return card;
}

function showDetail(p) {
    if (currentRole === 'user') {
        recentlyViewed = [p.id, ...recentlyViewed.filter(id => id !== p.id)].slice(0, 4);
        localStorage.setItem('herbarium_recent', JSON.stringify(recentlyViewed));
        renderRecentlyViewed();
    }
    
    document.getElementById('detailImg').src = p.imageUrl || `https://source.unsplash.com/800x600/?plant,${p.name}`;
    document.getElementById('detailName').textContent = p.name;
    document.getElementById('detailScientific').textContent = p.scientificName;
    document.getElementById('detailCategory').textContent = p.category;
    document.getElementById('detailUses').textContent = p.uses;
    
    const detailView = document.getElementById('detailView');
    detailView.style.display = 'flex';
    detailView.classList.remove('hidden');
    document.body.classList.add('modal-open');
}

function renderRecentlyViewed() {
    recentGrid.innerHTML = '';
    const section = document.getElementById('recentSection');
    // Only show if user mode AND no active search AND has items
    if (currentRole === 'user' && recentlyViewed.length > 0 && !isViewingAll && searchInput.value === '') {
        section.classList.remove('hidden');
        recentlyViewed.forEach(id => {
            const p = plants.find(x => x.id == id);
            if (p) recentGrid.appendChild(createCard(p, true));
        });
    } else {
        section.classList.add('hidden');
    }
}

// Admin Operations
async function savePlant() {
    const id = document.getElementById('plantId').value;
    const file = document.getElementById('imageUpload').files[0];
    let imageUrl = document.getElementById('plantImage').value;

    if (file) {
        const formData = new FormData();
        formData.append('image', file);
        try {
            const res = await fetch('/upload', { method: 'POST', body: formData });
            const data = await res.json();
            imageUrl = data.imageUrl;
        } catch (e) { console.error(e); }
    }

    const plantData = {
        id: id ? parseInt(id) : Date.now(),
        name: document.getElementById('plantName').value,
        scientificName: document.getElementById('scientificName').value,
        category: document.getElementById('plantCategory').value,
        uses: document.getElementById('plantUses').value,
        imageUrl: imageUrl
    };

    if (id) {
        const idx = plants.findIndex(p => p.id == id);
        plants[idx] = plantData;
    } else {
        plants.unshift(plantData);
    }

    localStorage.setItem('herbarium_plants', JSON.stringify(plants));
    plantModal.style.display = 'none';
    document.body.classList.remove('modal-open');
    renderPlants();
}

function openEditModal(id) {
    const p = plants.find(x => x.id == id);
    document.getElementById('plantId').value = p.id;
    document.getElementById('plantName').value = p.name;
    document.getElementById('scientificName').value = p.scientificName;
    document.getElementById('plantCategory').value = p.category;
    document.getElementById('plantUses').value = p.uses;
    document.getElementById('plantImage').value = p.imageUrl || '';
    document.getElementById('modalTitle').textContent = 'Edit Botanical Record';
    
    if (p.imageUrl) {
        imagePreview.innerHTML = `<img src="${p.imageUrl}">`;
    }
    plantModal.style.display = 'flex';
    document.body.classList.add('modal-open');
}

function deletePlant(id) {
    if (confirm('Delete this botanical record?')) {
        plants = plants.filter(p => p.id != id);
        localStorage.setItem('herbarium_plants', JSON.stringify(plants));
        renderPlants();
    }
}

// Events
function setupEventListeners() {
    searchInput.oninput = () => {
        isViewingAll = false;
        document.getElementById('clearSearchBtn').style.display = searchInput.value ? 'block' : 'none';
        renderPlants();
        renderRecentlyViewed();
    };

    document.getElementById('clearSearchBtn').onclick = () => {
        searchInput.value = '';
        searchInput.oninput();
    };

    document.getElementById('switchRoleBtn').onclick = () => {
        if (currentRole === 'user') {
            if (prompt("Admin Username:") === 'admin' && prompt("Admin Password:") === 'admin') {
                currentRole = 'admin';
                isViewingAll = true; // Auto-show library in admin
                document.getElementById('roleLabel').textContent = 'ADMIN VIEW';
                document.getElementById('adminControls').classList.remove('hidden');
                document.getElementById('switchRoleBtn').innerHTML = '<i class="fas fa-sign-out-alt"></i> Logout';
            }
        } else {
            currentRole = 'user';
            isViewingAll = false;
            document.getElementById('roleLabel').textContent = 'USER VIEW';
            document.getElementById('adminControls').classList.add('hidden');
            document.getElementById('switchRoleBtn').innerHTML = '<i class="fas fa-user-shield"></i> Switch to Admin';
        }
        renderPlants();
        renderRecentlyViewed();
    };

    document.getElementById('viewAllBtn').onclick = () => {
        isViewingAll = true;
        searchInput.value = '';
        renderPlants();
        renderRecentlyViewed();
    };

    document.getElementById('addPlantBtn').onclick = () => {
        createAddCard().onclick();
    };

    document.getElementById('cancelBtn').onclick = () => {
        plantModal.style.display = 'none';
        document.body.classList.remove('modal-open');
    };
    document.getElementById('backBtn').onclick = () => {
        document.getElementById('detailView').style.display = 'none';
        document.body.classList.remove('modal-open');
        renderRecentlyViewed();
    };

    document.getElementById('imageUpload').onchange = (e) => {
        const reader = new FileReader();
        reader.onload = (ev) => imagePreview.innerHTML = `<img src="${ev.target.result}">`;
        reader.readAsDataURL(e.target.files[0]);
    };

    plantForm.onsubmit = (e) => {
        e.preventDefault();
        savePlant();
    };
}

init();
window.openEditModal = openEditModal;
window.deletePlant = deletePlant;
window.hideDetail = () => document.getElementById('backBtn').onclick();
