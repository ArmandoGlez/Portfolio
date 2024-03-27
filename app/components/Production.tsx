import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { GiLemon } from "react-icons/gi";
import { GiAvocado } from "react-icons/gi";
import { GiSugarCane } from "react-icons/gi";

export default function Production() {
	const contentCards = [
		{
			icon: <GiLemon className="text-yellow-600" />,
			title: "Production",
			subtitle: "Mexican Fruit",
			fruitName: "Limón Persa",
			color: "bg-yellow-200",
		},
		{
			icon: <GiAvocado className="text-green-600" />,
			title: "Production",
			subtitle: "Mexican Fruit",
			fruitName: "Aguacate Hass",
			color: "bg-green-200",
		},
		{
			icon: <GiSugarCane className="text-green-950" />,
			title: "Production",
			subtitle: "Mexican Fruit",
			fruitName: "Caña de Ázucar",
			color: "bg-[#a2985f]",
		},
	];

	return (
		<div className="flex flex-row gap-4">
			{contentCards.map((card, index) => (
				<Card key={index} className={`py-4 flex-1 ${card.color}`}>
					<CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
						<p className="text-tiny uppercase font-bold">{card.title}</p>
						<small className="text-default-500">{card.subtitle}</small>
						<h4 className="font-bold text-large">{card.fruitName}</h4>
					</CardHeader>
					<CardBody className="flex items-center text-7xl justify-center py-2">
						{card.icon}
					</CardBody>
				</Card>
			))}
		</div>
	);
}
