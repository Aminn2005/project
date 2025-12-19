import React, { useState, useEffect } from 'react' 
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import SpecialItems from '../components/SpecialItems'
import Products from '../components/Products' 
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import CategoriesSecond from "../components/CategoriesSecond"
import CategoriesThird from "../components/CategoriesThird"
import CategoriesFourth from "../components/CategoriesFourth"
import styled from 'styled-components'
import axios from "axios"

const Home = () => {
  const [allDataExists, setAllDataExists] = useState(false);
  const [phones, setPhones] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [consoles, setConsoles] = useState([]);
  const [headphones, setHeadphones] = useState([]);
  const [tablets, setTablets] = useState([]);

  useEffect(() => {
    let mounted = true;

    async function getAccountsData(){
      const { data } = await axios.get("http://localhost:5001/accounts");
      localStorage.setItem("accountsData", JSON.stringify(data));
    };

    getAccountsData();

    const fetchAll = async () => {
      try {
        const [
          phonesRes,
          laptopsRes,
          consolesRes,
          headphonesRes,
          tabletsRes
        ] = await Promise.all([
          axios.get("http://localhost:5001/phone"),
          axios.get("http://localhost:5001/laptop"),
          axios.get("http://localhost:5001/console"),
          axios.get("http://localhost:5001/headphone"),
          axios.get("http://localhost:5001/tablet")
        ]);

        if (!mounted) return;

        const phonesData = phonesRes.data || [];
        const laptopsData = laptopsRes.data || [];
        const consolesData = consolesRes.data || [];
        const headphonesData = headphonesRes.data || [];
        const tabletsData = tabletsRes.data || [];

        setPhones(phonesData);
        setLaptops(laptopsData);
        setConsoles(consolesData);
        setHeadphones(headphonesData);
        setTablets(tabletsData);

        if (!allDataExists) {
          const allData = [];
          allData.push(...phonesData.slice(0, 20));
          allData.push(...laptopsData);
          allData.push(...consolesData);
          allData.push(...headphonesData);
          allData.push(...tabletsData);
          allData.push(...phonesData.slice(20, 33));
          localStorage.setItem("allData", JSON.stringify(allData));
          setAllDataExists(true);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchAll();
    return () => { mounted = false; };
  });

  

  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <CategoriesSecond />
      <SpecialItems />
      <CategoriesThird />
      <CategoriesFourth />
      <Footer />
    </div>
  );
};

export default Home;
