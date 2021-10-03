import React from 'react';
import styles from './Mainstory.module.css';
import pic from './image.png';

export default function Mainstory() {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.mainheader}>Koronavirus</div>
                <div> <img src={pic} width="500" height="300" ></img> </div>
                <div className={styles.asd}>🔴HS seuraa</div>
                <div> <span className={styles.mainnews}>Päivittyvä seuranta |</span><span className={styles.mainnews2}> STM : Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan</span></div>
            </div>

            <div className={styles.side}>
                <div className={styles.sideheader}>Luetuimmat</div>
                    <div>1 <span className={styles.sidenews}> Rikosepäilyt | </span> EIT-huijaus: Kuolleeksi väitetyn irakilaismiehen tytär valehteli perheen taustoista jo turvapaikkahakemuksessa<hr></hr></div>
                    <div>2 <span className={styles.sidenews}> HS Vantaa | </span>Vantaalle nousi vankilan näköinen päiväkoti, jota pilkataan nyt surutta verkossa<hr></hr></div>
                    <div>3 <span className={styles.sidenews}> Päivittyvä seuranta |</span> STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan<hr></hr></div>
                    <div>4 <span className={styles.sidenews}> Nyt.fi |</span> Harry Styles puki ylleen suomalaisen suunnittelijan neuleen, nyt tätä "mummon tikkutäkkiä" neulovat kymmenet tuhannet ympäri maailman - Soitimme vaatesuunnittelijalle<hr></hr></div>
                    <div>5 <span className={styles.sidenews}>Rikosepäilyt |</span> Atte Jääskeläinen sai syytteet liikenneturvallisuuden vaarantamisesta ja vammantuottamuksesta - "Olen myöntänyt syyllisyyteni"<hr></hr></div>
                    <div>6 <span className={styles.sidenews}> Helsinki |</span> Työryhmän ehdotus julki: Jättimäisestä hiilivoimalasta halutaan täysin uudenlainen tapahtumapaikka kaupungin asukkaille <hr></hr></div>
            </div>
            </div>
    )
}
