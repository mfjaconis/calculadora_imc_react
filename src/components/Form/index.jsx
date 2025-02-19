import { useState } from "react";

const Form = () => {
	const [peso, setPeso] = useState("");
	const [altura, setAltura] = useState("");
	const [imc, setImc] = useState(null);
	const [classificacao, setClassificacao] = useState("");

	const calcularImc = (e) => {
		e.preventDefault();

		if (!peso || !altura) {
			alert("Por favor, preencha todos os campos.");
			return;
		}

		const alturaMetros = altura / 100;
		const imcCalculado = peso / (alturaMetros * alturaMetros);
		setImc(imcCalculado.toFixed(2));

		if (imcCalculado < 18.5) {
			setClassificacao("Abaixo do peso");
		} else if (imcCalculado >= 18.5 && imcCalculado < 24.9) {
			setClassificacao("Peso normal");
		} else if (imcCalculado >= 25 && imcCalculado < 29.9) {
			setClassificacao("Sobrepeso");
		} else if (imcCalculado >= 30 && imcCalculado < 34.9) {
			setClassificacao("Obesidade Grau 1");
		} else if (imcCalculado >= 35 && imcCalculado < 39.9) {
			setClassificacao("Obesidade Grau 2");
		} else {
			setClassificacao("Obesidade Grau 3");
		}

		setPeso("");
		setAltura("");
	};

	return (
		<>
			<main>
				<form>
					<input
						required
						type="number"
						placeholder="Digite seu peso"
						value={peso}
						onChange={({ target }) => setPeso(parseFloat(target.value))}
					/>
					<input
						required
						type="number"
						placeholder="Digite sua altura"
						value={altura}
						onChange={({ target }) => setAltura(parseFloat(target.value))}
					/>
					<button type="submit" onClick={calcularImc}>
						Calcular
					</button>
				</form>
				{imc && (
					<div>
						<p>Seu IMC: {imc}</p>
						<p>Classificação: {classificacao}</p>
					</div>
				)}
			</main>
		</>
	);
};

export default Form;
