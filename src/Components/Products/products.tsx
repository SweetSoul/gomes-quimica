import { Alert, AlertIcon, Box, Center, Text } from "@chakra-ui/react";

export default function Products() {
	return (
		<>
			<Center marginBottom="24px" id="planos">
				<Text as="h2" fontSize="26px" fontWeight="600" color="brand.100">
					Cursos para
				</Text>
			</Center>
			<Box display="flex" gap="28px" justifyContent="center" flexWrap={{ base: "wrap", md: "nowrap" }}>
				<Box
					flex={{ base: "0 0 100%", md: "0 0 45%" }}
					border="1px solid rgba(0,0,0,0.1)"
					borderRadius="12px"
					overflow="hidden"
					display="flex"
					flexDirection="column"
				>
					<Box
						bg="brand.100"
						height="100px"
						display="flex"
						flexDirection="column"
						alignItems="center"
						justifyContent="center"
						flex="0 0 auto"
					>
						<Text color="white" as="h2" fontWeight="600" fontSize="24px">
							Ensino Médio
						</Text>
					</Box>
					<Box
						display="flex"
						alignItems="center"
						justifyContent="center"
						flexDirection="column"
						flex="1 0 auto"
						padding="12px"
					>
						<Text color="brand.100" fontWeight="700" fontSize="20px">
							Individual
						</Text>
						<Text color="brand.100" fontWeight="600" fontSize="18px">
							Aula - R$ 100,00
						</Text>
						<Text color="brand.100" fontWeight="600" fontSize="18px">
							Pacote 3 aulas - R$ 270,00
						</Text>
						<Text color="brand.100" fontWeight="700" fontSize="20px" marginTop="12px">
							Grupo (3 alunos)
						</Text>
						<Text color="brand.100" fontWeight="600" fontSize="18px">
							Aula - R$ 270,00
						</Text>
					</Box>
				</Box>
				<Box
					flex={{ base: "0 0 100%", md: "0 0 45%" }}
					border="1px solid rgba(0,0,0,0.1)"
					borderRadius="12px"
					overflow="hidden"
					display="flex"
					flexDirection="column"
				>
					<Box
						bg="brand.100"
						height="100px"
						display="flex"
						flexDirection="column"
						alignItems="center"
						justifyContent="center"
						flex="0 0 auto"
					>
						<Text color="white" as="h2" fontWeight="600" fontSize="24px">
							Ensino Superior
						</Text>
					</Box>
					<Box
						display="flex"
						alignItems="center"
						justifyContent="center"
						flexDirection="column"
						flex="1 0 auto"
						padding="12px"
					>
						<Text color="brand.100" fontWeight="700" fontSize="20px">
							Individual
						</Text>
						<Text color="brand.100" fontWeight="600" fontSize="18px">
							Aula - R$ 140,00
						</Text>
						<Text color="brand.100" fontWeight="600" fontSize="18px">
							Pacote 3 aulas - R$ 378,00
						</Text>
					</Box>
				</Box>
			</Box>
			<Alert status="info" display="flex" justifyContent="center" flexWrap="wrap" marginTop="20px">
				<Box flex="0 0 100%" textAlign="center">
					<Text as="h3" fontWeight="600" fontSize="20px" color="brand.100">
						Horário das aulas
					</Text>
				</Box>
				<AlertIcon />
				Segunda a Sexta - 14:00 | 15:00 | 16:00 | 17:00
				<br /> Sábado - 13:00 | 14:00 | 15:00 | 16:00 | 17:00
			</Alert>
		</>
	);
}
