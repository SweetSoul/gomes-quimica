import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
	Link,
	Radio,
	RadioGroup,
	Select,
	Stack,
	Text,
	Textarea,
	useRadioGroup,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface IContactForm {
	name: string;
	msg: string;
	plan: string;
}

interface IClicked {
	name: boolean;
	msg: boolean;
	plan: boolean;
}

export default function Contact() {
	const [input, setInput] = useState<IContactForm>({} as IContactForm);
	const [isClicked, setIsClicked] = useState<IClicked>({} as IClicked);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
		inputName: string
	) => {
		setInput({ ...input, [inputName]: e.target.value });
	};

	function handleInputClicked(inputName: string) {
		setIsClicked({ ...isClicked, [inputName]: true });
	}

	const isError: IClicked = {
		name: isClicked?.name ? input?.name?.length < 3 : false,
		msg: isClicked?.msg ? input?.msg?.length < 10 : false,
		plan: isClicked?.plan ? input?.plan?.length < 3 : false,
	};

	const dynamicLink = `https://api.whatsapp.com/send?phone=+330749303048&text=Olá%2C vim pelo seu site e estou interessado no curso de química.%0AMe chamo ${
		input?.name
	}.${!!input?.msg ? `%0A%0A${encodeURI(input.msg)}%0A` : ""}${
		!!input?.plan ? `%0AGostaria de fazer o curso de ${input?.plan}` : ""
	}`;

	function handleSendMsg() {
		if (input?.name?.length < 3) return;
		window.open(dynamicLink, "_blank");
	}

	return (
		<Box height="50vh" marginBottom="50px">
			<Box bg="brand.100" textAlign="center" padding="12px 0" marginBottom="24px">
				<Text as="h2" textAlign="center" fontSize="3xl" color="brand.400">
					Fale comigo
				</Text>
				<Text as="p" margin="8px 0 16px" textAlign="center" color="brand.400">
					Se preferir entrar em contato via email ou telefone:
					<br />
					<Link color="brand.400" href="mailto:contato@gomesquimica.com.br">
						contato@gomesquimica.com.br
					</Link>
					<br />
					<Link
						color="brand.400"
						href="https://api.whatsapp.com/send?phone=+330749303048&text=Olá%2C vim pelo seu site e estou interessado no curso de química"
					>
						+ 33 07 49 30 30 48
					</Link>
				</Text>
			</Box>
			<Box display="flex" alignItems="center" justifyContent="center">
				<Box width="500px">
					<FormControl isInvalid={isError?.name} isRequired>
						<FormLabel htmlFor="name">Nome</FormLabel>
						<Input
							id="name"
							type="text"
							value={input?.name || ""}
							onChange={(e) => handleInputChange(e, "name")}
							onClick={() => handleInputClicked("name")}
							placeholder="Digite seu nome"
						/>
						{isError && <FormErrorMessage>Nome é obrigatório.</FormErrorMessage>}
					</FormControl>
					<FormControl margin="12px 0" isInvalid={isError?.msg}>
						<FormLabel htmlFor="msg">Mensagem</FormLabel>
						<Textarea
							id="msg"
							value={input?.msg}
							onChange={(e) => handleInputChange(e, "msg")}
							placeholder="Coloque aqui sua mensagem"
							size="sm"
						/>
					</FormControl>
					<FormControl isInvalid={isError?.plan}>
						<FormLabel htmlFor="plan">Plano</FormLabel>
						<Select id="plan" placeholder="Selecione o plano de interesse">
							<option value="medio">Ensino médio</option>
							<option value="superior">Ensino superior</option>
						</Select>
					</FormControl>
					<Box display="flex" justifyContent="center" marginTop="24px">
						<Button
							width="100px"
							color="brand.400"
							bg="brandBg.400"
							_hover={{ background: "brandBg.300" }}
							onClick={handleSendMsg}
						>
							Enviar
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
