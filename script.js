const peruDestinations = [
  {
    name: "Lima",
    region: "Costa",
    tag: "Gastronomía + historia",
    image: "https://images.unsplash.com/photo-1549941871-5d5d1f2f6d5f?auto=format&fit=crop&w=900&q=80",
    summary:
      "Lima combina historia colonial, creatividad contemporánea y una de las cocinas más reconocidas del mundo.",
    historia:
      "Como capital del virreinato, Lima fue un gran centro de intercambio cultural entre Europa, África y los pueblos andinos.",
    arquitectura:
      "Casonas, conventos, iglesias barrocas y plazas que narran la historia de la ciudad y su mirada republicana.",
    gastronomia:
      "Ceviche, causa, ají de gallina, lomo saltado, pisco y una cocina que va del mercado al restaurante con estrella Michelin.",
    cultura:
      "Barranco, Miraflores, festivales, arte urbano y barrios que expresan una Lima moderna y profundamente multicultural.",
    highlights: ["Barranco", "Miraflores", "Centro Histórico", "Museo Larco", "Ceviche"],
    experienceTags: ["Historia", "Arquitectura", "Gastronomía", "Cultura"]
  },
  {
    name: "Cusco",
    region: "Andes",
    tag: "Patrimonio + espiritualidad",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=900&q=80",
    summary:
      "Cusco es la ciudad donde la grandeza inca se encuentra con la herencia colonial y la energía espiritual del altiplano.",
    historia:
      "Fue capital del Imperio Inca y continúa siendo un punto clave de la memoria andina, con capas históricas que se superponen en cada calle.",
    arquitectura:
      "Templos incas, iglesias absolutas de piedra, plazas empedradas y construcciones que evocan un paisaje de memoria material.",
    gastronomia:
      "Pachamanca, cuy, chicha, quinoa, papa nativa y sabores complejos que conectan con la tierra y la montaña.",
    cultura:
      "Festividades, textiles, rituales andinos, música y comunidades que conservan vivas las tradiciones del Cusco antiguo y contemporáneo.",
    highlights: ["Sacsayhuamán", "Qorikancha", "Plaza de Armas", "Pisac", "Sacred Valley"],
    experienceTags: ["Historia", "Arquitectura", "Gastronomía", "Cultura"]
  },
  {
    name: "Arequipa",
    region: "Sur",
    tag: "Arquitectura + sillar",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=900&q=80",
    summary:
      "Arequipa se reconoce por su arquitectura de sillar, su serenidad urbana y la riqueza cultural del sur del Perú.",
    historia:
      "La ciudad se consolidó en la época colonial como centro de comercio, administración y expansión cultural en el sur andino.",
    arquitectura:
      "La ciudad blanca, con sus casas de sillar volcánico, conventos, plazas y monumentos que combinan belleza y dureza del paisaje.",
    gastronomia:
      "Rocoto relleno, adobo, queso, alpaca, dulces regionales y una cocina que refleja la intensidad del territorio.",
    cultura:
      "Fiestas, tradiciones, vida cotidiana y una identidad regional sólida que se expresa en cada esquina.",
    highlights: ["Monasterio de Santa Catalina", "Plaza de Armas", "Yanahuara", "Misti", "Calles coloniales"],
    experienceTags: ["Arquitectura", "Gastronomía", "Historia", "Cultura"]
  },
  {
    name: "Puno",
    region: "Altiplano",
    tag: "Tradición + lago",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    summary:
      "Puno es la puerta del altiplano andino y una de las regiones más ricas en memoria, ritual y cultura viva.",
    historia:
      "Un territorio profundamente conectado con las civilizaciones andinas y con el lago Titicaca como eje simbólico y espiritual.",
    arquitectura:
      "Viviendas modestamente construidas con materiales locales, comunidades con identidad propia y urbanismo ligado a la tierra.",
    gastronomia:
      "Trucha, quinoa, chuño, papa nativa, sabores del altiplano y cocina tradicional muy autóctona.",
    cultura:
      "Danzas, textiles, ceremonias, fiestas de la Virgen de la Candelaria y comunidades que mantienen fuertes vínculos con sus antiguas costumbres.",
    highlights: ["Lago Titicaca", "Islas Uros", "Taquile", "Fiestas", "Textilería"],
    experienceTags: ["Cultura", "Naturaleza", "Historia"]
  },
  {
    name: "Huaraz",
    region: "Cordillera Blanca",
    tag: "Naturaleza + andes",
    image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=900&q=80",
    summary:
      "Huaraz es la base para explorar la majestuosidad de la Cordillera Blanca y el mundo andino en su versión más alta.",
    historia:
      "La región guarda evidencia de asentamientos humanos y rutas de intercambio que conectaron culturas de montaña y valles.",
    arquitectura:
      "Pueblos andinos con una arquitectura de función, materiales locales y una presencia muy fuerte del entorno natural.",
    gastronomia:
      "Papas nativas, cuyes, sopas de quinua, productos del altiplano y una cocina vinculada a la fuerza del paisaje.",
    cultura:
      "Formas de vida que aún resguardan memoria, ritual y respeto por la montaña y la tierra.",
    highlights: ["Cordillera Blanca", "Laguna Parón", "Huascarán", "Senderismo", "Pueblos andinos"],
    experienceTags: ["Naturaleza", "Historia", "Cultura"]
  },
  {
    name: "Ayacucho",
    region: "Centro-sur",
    tag: "Memoria + tradición",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
    summary:
      "Ayacucho combina historia, identidad regional y una cultura con una intensidad emocional muy particular.",
    historia:
      "Desde su valor durante la independencia hasta su relevancia en la historia regional, Ayacucho guarda una memoria profunda de resistencia y comunidad.",
    arquitectura:
      "Conventos, plazas, casonas y trazados urbanos con una presencia muy marcada del legado colonial y republicano.",
    gastronomia:
      "Queso, chicha, platos tradicionales, sabores regionales y una cocina arraigada en la historia del sur andino.",
    cultura:
      "Danzas, música, festividades y tradiciones que mantienen un contacto directo con la identidad regional.",
    highlights: ["Plaza de Armas", "Conventos", "Museos", "Danzas", "Historia regional"],
    experienceTags: ["Historia", "Cultura", "Arquitectura"]
  },
  {
    name: "Iquitos",
    region: "Amazonía",
    tag: "Selva + comunidad",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=80",
    summary:
      "Iquitos ofrece una experiencia profunda de la Amazonía peruana: agua, selva, gente y saberes que viven en relación con la naturaleza.",
    historia:
      "Una ciudad de frontera, con raíces indígenas, migratorias y amazónicas que se mezclan en la historia regional.",
    arquitectura:
      "Casas de madera, centros de comercio y un paisaje urbano que se adapta a la geografía selvática.",
    gastronomia:
      "Pescado, tacacho, juane, preparaciones amazónicas y sabores que se entrelazan con la abundancia del río.",
    cultura:
      "Comunidades indígenas, rituales, música, narrativas orales y formas de habitar el territorio con identidad propia.",
    highlights: ["Amazonía", "Ríos", "Selva", "Comunidades", "Fauna"],
    experienceTags: ["Naturaleza", "Cultura", "Gastronomía"]
  },
  {
    name: "Nazca",
    region: "Costa",
    tag: "Misterio + arqueología",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
    summary:
      "Nazca conecta el desierto, el misterio y el legado de antiguas civilizaciones que dejaron huellas gigantes en la tierra.",
    historia:
      "Las líneas de Nazca son una de las expresiones culturales más fascinantes del Perú, y su origen aún genera preguntas y asombro.",
    arquitectura:
      "No es una ciudad de grandes edificios, pero sí una geografía monumental y un legado arqueológico extraordinario.",
    gastronomia:
      "Sabores del sur peruano con influencia andina y costeña, con platos simples y profundos en textura y memoria.",
    cultura:
      "El misterio de las líneas, el conocimiento ancestral del desierto y una relación íntima con la tierra y el cielo.",
    highlights: ["Líneas de Nazca", "Cahuachi", "Mirador", "Desierto", "Misterio"],
    experienceTags: ["Historia", "Arquitectura", "Naturaleza"]
  },
  {
    name: "Trujillo",
    region: "Norte",
    tag: "Cultura + patrimonio",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    summary:
      "Trujillo es una ventana al norte peruano, con cultura, patrimonio y una historia ligada al epicentro de la civilización mochica.",
    historia:
      "La ciudad guarda huellas de los mochicas, la conquista y la expansión republicana, con una rica tradición cultural.",
    arquitectura:
      "Iglesias, plazas y edificios con un estilo propio del norte, mezcla de herencia indígena y colonial.",
    gastronomia:
      "Sopa teóloga, ceviche norteño, mariscos, platos de huerta y cocina muy conectada al mar y al valle.",
    cultura:
      "Festividades, música, rituales y comunidades que mantienen vivos los recuerdos del norte peruano.",
    highlights: ["Huacas", "Museos", "Mar", "Arquitectura", "Norte"],
    experienceTags: ["Historia", "Arquitectura", "Cultura", "Gastronomía"]
  },
  {
    name: "Puerto Maldonado",
    region: "Amazonía",
    tag: "Selva + vida silvestre",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
    summary:
      "Puerto Maldonado abre la puerta a la selva tropical peruana, con una identidad ligada a la biodiversidad y la vida de la Amazonía.",
    historia:
      "Una ciudad conectada con la explotación, el río y los pueblos amazónicos, con una historia que refleja la riqueza y la complejidad del territorio.",
    arquitectura:
      "Con una presencia mínima en la urbanidad, la identidad del lugar se expresa más en el entorno natural y la vida comunitaria.",
    gastronomia:
      "Pescados, frutas tropicales, platos amazónicos y saberes culinarios profundamente ligados a la selva.",
    cultura:
      "Comunidades, idiomas, biodiversidad y espiritualidad que convierten cada experiencia en contacto directo con la naturaleza.",
    highlights: ["Selva", "Biodiversidad", "Ríos", "Fauna", "Aventura"],
    experienceTags: ["Naturaleza", "Cultura", "Gastronomía"]
  }
];

function renderDestinos(list = peruDestinations) {
  const container = document.getElementById("destinoGrid");

  if (!container) return;

  container.innerHTML = list
    .map(
      (destino) => `
        <article class="destino-card">
          <div class="destino-image" style="background-image: url('${destino.image}');"></div>
          <div class="destino-content">
            <span class="destino-tag">${destino.tag}</span>
            <h3>${destino.name}</h3>
            <p>${destino.summary}</p>

            <div class="destination-list">
              ${destino.highlights.map((item) => `<span>${item}</span>`).join("")}
            </div>

            <a href="#" class="destino-link">Ver raíces →</a>
          </div>
        </article>
      `
    )
    .join("");
}

function applyFilters() {
  const region = document.getElementById("regionFilter")?.value || "";
  const experience = document.getElementById("experienceFilter")?.value || "";

  const filtered = peruDestinations.filter((destino) => {
    const regionMatch = !region || destino.region === region;
    const experienceMatch = !experience || destino.experienceTags.includes(experience);
    return regionMatch && experienceMatch;
  });

  renderDestinos(filtered);
}

renderDestinos();
