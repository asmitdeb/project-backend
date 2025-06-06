import prisma from "../lib/prisma";
import { Request, Response } from "express";

//create dummy data
export const createDummyOffers = async (req: Request, res: Response) => {
    try {
      const dummyOffers = [
        {
          cropName: "Wheat",
          description: "High-quality wheat grains",
          cropType: "CEREAL",
          price: 1500,
          quantity: 500,
          harvestTime: "2024-01-15",
          location: "Farm A",
          offerDuration: 90,
          paymentTerms: "Cash on delivery",
          createdBy: req.user?.id || "1", // Fallback to a default user ID
        },
        {
          cropName: "Tomato",
          description: "Freshly harvested tomatoes",
          cropType: "VEGETABLE",
          price: 1200,
          quantity: 300,
          harvestTime: "2024-02-10",
          location: "Farm B",
          offerDuration: 60,
          paymentTerms: "Cash on delivery",
          createdBy: req.user?.id || "1",
        },
        {
            cropName: "Mango",
            description: "Sweet and ripe mangoes",
            cropType: "FRUIT",
            price: 2500,
            quantity: 150,
            harvestTime: "2024-03-01",
            location: "Farm C",
            offerDuration: 120,
            paymentTerms: "Cash on delivery",
            createdBy: req.user?.id || "1",
          },
          {
            cropName: "Chickpea",
            description: "Organic chickpeas",
            cropType: "PULSE",
            price: 2200,
            quantity: 450,
            harvestTime: "2024-04-05",
            location: "Farm D",
            offerDuration: 180,
            paymentTerms: "Cash on delivery",
            createdBy: req.user?.id || "1",
          },
          {
            cropName: "Soybean",
            description: "High protein soybeans",
            cropType: "LEGUME",
            price: 1800,
            quantity: 500,
            harvestTime: "2024-05-15",
            location: "Farm E",
            offerDuration: 180,
            paymentTerms: "Cash on delivery",
            createdBy: req.user?.id || "1",
          },
          {
            cropName: "Canola",
            description: "Premium canola for oil extraction",
            cropType: "OILSEED",
            price: 3500,
            quantity: 200,
            harvestTime: "2024-06-10",
            location: "Farm F",
            offerDuration: 90,
            paymentTerms: "Cash on delivery",
            createdBy: req.user?.id || "1",
          },
          {
            cropName: "Alfalfa",
            description: "Nutritious alfalfa for livestock",
            cropType: "FODDER",
            price: 1000,
            quantity: 600,
            harvestTime: "2024-07-01",
            location: "Farm G",
            offerDuration: 120,
            paymentTerms: "Cash on delivery",
            createdBy: req.user?.id || "1",
          },
          {
            cropName: "Sugarcane",
            description: "Sweet sugarcane for juice and sugar",
            cropType: "SUGAR_CROP",
            price: 4000,
            quantity: 250,
            harvestTime: "2024-08-20",
            location: "Farm H",
            offerDuration: 360,
            paymentTerms: "Cash on delivery",
            createdBy: req.user?.id || "1",
          },
          {
            cropName: "Pepper",
            description: "Spicy pepper for seasoning",
            cropType: "SPICE",
            price: 8000,
            quantity: 100,
            harvestTime: "2024-09-10",
            location: "Farm I",
            offerDuration: 180,
            paymentTerms: "Cash on delivery",
            createdBy: req.user?.id || "1",
          },
          {
            cropName: "Cotton",
            description: "High-quality cotton for textiles",
            cropType: "COTTON",
            price: 5000,
            quantity: 500,
            harvestTime: "2024-10-01",
            location: "Farm J",
            offerDuration: 270,
            paymentTerms: "Cash on delivery",
            createdBy: req.user?.id || "1",
          },
          {
            cropName: "Rice",
            description: "Organic basmati rice",
            cropType: "CEREAL",
            price: 2500,
            quantity: 600,
            harvestTime: "2024-11-15",
            location: "Farm K",
            offerDuration: 120,
            paymentTerms: "Cash on delivery",
            createdBy: req.user?.id || "1",
          },
          {
            cropName: "Carrot",
            description: "Fresh organic carrots",
            cropType: "VEGETABLE",
            price: 900,
            quantity: 800,
            harvestTime: "2024-12-01",
            location: "Farm L",
            offerDuration: 90,
            paymentTerms: "Cash on delivery",
            createdBy: req.user?.id || "1",
          },
          {
            cropName: "Papaya",
            description: "Sweet papayas rich in vitamins",
            cropType: "FRUIT",
            price: 2000,
            quantity: 200,
            harvestTime: "2024-01-25",
            location: "Farm M",
            offerDuration: 120,
            paymentTerms: "Cash on delivery",
            createdBy: req.user?.id || "1",
          },
          {
            cropName: "Cabbage",
            description: "Crisp and fresh cabbage",
            cropType: "VEGETABLE",
            price: 1500,
            quantity: 400,
            harvestTime: "2024-02-20",
            location: "Farm N",
            offerDuration: 100,
            paymentTerms: "Cash on delivery",
            createdBy: req.user?.id || "1",
          },
          {
            cropName: "Barley",
            description: "High-protein barley",
            cropType: "CEREAL",
            price: 2200,
            quantity: 350,
            harvestTime: "2024-03-10",
            location: "Farm O",
            offerDuration: 130,
            paymentTerms: "Cash on delivery",
            createdBy: req.user?.id || "1",
          },
          {
            cropName: "Lentils",
            description: "Organic lentils",
            cropType: "PULSE",
            price: 1800,
            quantity: 450,
            harvestTime: "2024-04-15",
            location: "Farm P",
            offerDuration: 150,
            paymentTerms: "Cash on delivery",
            createdBy: req.user?.id || "1",
          },
          {
            cropName: "Mustard",
            description: "High-quality mustard seeds",
            cropType: "OILSEED",
            price: 2700,
            quantity: 300,
            harvestTime: "2024-05-30",
            location: "Farm Q",
            offerDuration: 200,
            paymentTerms: "Cash on delivery",
            createdBy: req.user?.id || "1",
          },
          {
            cropName: "Tomatillo",
            description: "Organic tomatillos for sauces",
            cropType: "VEGETABLE",
            price: 2500,
            quantity: 250,
            harvestTime: "2024-06-25",
            location: "Farm R",
            offerDuration: 110,
            paymentTerms: "Cash on delivery",
            createdBy: req.user?.id || "1",
          },
          {
            cropName: "Pineapple",
            description: "Tropical pineapples, sweet and juicy",
            cropType: "FRUIT",
            price: 3500,
            quantity: 180,
            harvestTime: "2024-07-15",
            location: "Farm S",
            offerDuration: 160,
            paymentTerms: "Cash on delivery",
            createdBy: req.user?.id || "1",
          },
          {
            cropName: "Oats",
            description: "Organic oats for healthy breakfast",
            cropType: "CEREAL",
            price: 2300,
            quantity: 400,
            harvestTime: "2024-08-05",
            location: "Farm T",
            offerDuration: 140,
            paymentTerms: "Cash on delivery",
            createdBy: req.user?.id || "1",
          },
          {
            cropName: "Spinach",
            description: "Fresh organic spinach",
            cropType: "VEGETABLE",
            price: 950,
            quantity: 600,
            harvestTime: "2024-09-05",
            location: "Farm U",
            offerDuration: 80,
            paymentTerms: "Cash on delivery",
            createdBy: req.user?.id || "1",
          },
        // Add more dummy offers as needed
      ];
  
      // Map through dummy data and create offers
      for (const offer of dummyOffers) {
        await prisma.offer.create({
          //@ts-ignore
          data: {
            ...offer,
            harvestTime: new Date(offer.harvestTime),
          },
        });
      }
  
      res
        .status(201)
        .json({ message: "Dummy offers created successfully.", offers: dummyOffers });
    } catch (error) {
      console.error("Error creating dummy offers:", error);
      res.status(500).json({ error: "Internal server error." });
    }
  };