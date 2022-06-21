import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Button, Link, List, ListIcon, ListItem, Text } from "@chakra-ui/react";

export default function About() {
	return (
		<>
			<Box
				height="50vh"
				display="flex"
				flexFlow="column"
				justifyContent="center"
				alignItems="center"
				padding="0 24px"
			>
				<Text as="h2" fontSize="2xl" color="brand.100">
					Prof. Marco Gomes
				</Text>
				<hr className="divider" />
				<Text textAlign="center" fontSize="18px" color="brand.100">
					Possui curso técnico em Análises e Processos Químicos pelo Instituto Federal de Educação, Ciência e
					Tecnologia Fluminense (2003-2005); na Universidade Estadual do Norte Fluminense realizou a graduação
					em Licenciatura em Química no período de (2007-2011), Mestrado em Ciências Naturais com ênfase em
					Química Orgânica no período de (2011-2012), doutorado em Ciências Naturais com ênfase em
					Bio-Orgânica (2013-2016) com estágio de 12 meses no Institut de Chimie des Substances Naturelles -
					França (10/2013-09/2014) e 4 Pós-doutorados em 3 diferentes países.
				</Text>
				<Box alignSelf="flex-start" marginTop="24px" paddingLeft="min(32px, 5%)">
					<Text fontSize="18px" color="brand.100">
						Atuações profissionais recentes:
					</Text>
					<List spacing={3} alignSelf="flex-start" marginTop="12px">
						<ListItem>
							<ListIcon as={CheckCircleIcon} color="green.500" />
							2021 - Atual - Université d´Avignon et des Pays du Vaucluse - França
						</ListItem>
						<ListItem>
							<ListIcon as={CheckCircleIcon} color="green.500" />
							2020 - 2021 - Université de Bretagne Occidentale - França
						</ListItem>
						<ListItem>
							<ListIcon as={CheckCircleIcon} color="green.500" />
							2018 - 2020 - German Cancer Research Center - Alemanha
						</ListItem>
					</List>
				</Box>
				<Link
					marginTop="24px"
					href="http://lattes.cnpq.br/1708325142303096"
					target="_blank"
					rel="noopener, noreferrer"
				>
					<Button color="brand.400" bg="brandBg.400" _hover={{ background: "brandBg.300" }}>
						Ver currículo detalhado
					</Button>
				</Link>
			</Box>
		</>
	);
}
