const API_URL = "http://localhost:3000/api";

async function carregarEnquetes() {
  try {
    const resposta = await fetch(`${API_URL}/enquetes`);
    const enquetes = await resposta.json();
    mostrarEnquetes(enquetes);
  } catch (error) {
    console.error("Erro ao carregar enquetes:", error);
  }
}

function mostrarEnquetes(enquetes) {
  const container = document.getElementById("polls-container");
  container.innerHTML = "";

  enquetes.forEach((enquete) => {
    const card = document.createElement("div");
    card.className = "bg-white p-6 rounded-xl shadow-sm border border-gray-200";

    const isActive = enquete.status === "Em andamento";
    const statusColor = isActive ? "text-green-600" : "text-red-500";

    card.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h3 class="text-lg font-bold text-gray-800">${enquete.titulo}</h3>
                    <span class="text-xs font-semibold uppercase ${statusColor}">${enquete.status}</span>
                </div>
                <button onclick="deleteEnquete(${enquete.id})" class="text-red-400 hover:text-red-600 p-1">
                    Deletar
                </button>
            </div>
            <div class="space-y-3">
                ${enquete.opcoes
                  .map((op) => {
                    // Se não estiver ativa, aplicamos classes de desabilitado e o atributo 'disabled'
                    const btnClass = isActive
                      ? "hover:bg-blue-50 hover:border-blue-300"
                      : "opacity-50 cursor-not-allowed bg-gray-50";

                    return `
                                <button 
                                    onclick="vote(${enquete.id}, ${op.id})" 
                                    ${!isActive ? "disabled" : ""} 
                                    class="w-full flex justify-between items-center p-3 rounded-lg border border-gray-100 transition-colors group ${btnClass}">
                                    <span class="${isActive ? "text-gray-700 group-hover:text-blue-700" : "text-gray-400"} font-medium">
                                        ${op.nome}
                                    </span>
                                    <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm font-mono">
                                        ${op.votos} votos
                                    </span>
                                </button>
                            `;
                  })
                  .join("")}
                    </div>
                    ${!isActive ? `<p class="mt-3 text-xs text-center text-gray-400 italic">Votação encerrada ou ainda não iniciada.</p>` : ""}
        `;
    container.appendChild(card);
  });
}

async function vote(enqueteId, opcaoId) {
  try {
    const resposta = await fetch(
      `${API_URL}/enquetes/${enqueteId}/votar/${opcaoId}`,
      {
        method: "POST",
      },
    );

    const result = await resposta.json();
    if (resposta.ok) {
      alert("Voto computado!");
      carregarEnquetes();
    } else {
      alert(result.erro || "Erro ao votar");
    }
  } catch (error) {
    alert("Erro na conexão com o servidor");
  }
}

async function deleteEnquete(id) {
  if (!confirm("Tem certeza que deseja excluir esta enquete?")) return;

  try {
    const response = await fetch(`${API_URL}/enquetes/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      carregarEnquetes();
    } else {
      alert("Erro ao excluir");
    }
  } catch (error) {
    alert("Erro de conexão");
  }
}

document.getElementById("poll-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const start_date = document.getElementById("start_date").value;
  const end_date = document.getElementById("end_date").value;
  const options = Array.from(document.querySelectorAll(".option-input"))
    .map((input) => input.value)
    .filter((val) => val !== "");

  try {
    const resposta = await fetch(`${API_URL}/enquetes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        titulo: title,
        data_inicio: start_date,
        data_final: end_date,
        opcoes: options,
      }),
    });

    if (resposta.ok) {
      toggleModal();
      carregarEnquetes();
      e.target.reset();
    } else {
      const err = await resposta.json();
      alert(err.erro);
    }
  } catch (error) {
    alert("Erro ao criar enquete");
  }
});

function toggleModal() {
  const modal = document.getElementById("modal");
  modal.classList.toggle("hidden");
}

carregarEnquetes();
