import React from 'react'
import ArticleServices from './ArticleServices'
import ArticleWorkflow from './ArticleWorkflow'
import ArticlePortfolio from './ArticlePortfolio'
import dataAll from '../dataAll.json'
// import { useState } from 'react'
export default function Article() {
    const onServiceClick = (id) => {
        const elementHidden = Array.from(document.getElementsByClassName(id))
        console.log(elementHidden);
        const elIon = document.getElementsByClassName(`icon-${id}`)
        console.log(elIon);
        const checkicon = elIon[0].getElementsByTagName('ion-icon')
        console.log(checkicon);
        const checkNameIcon = checkicon[0].getAttribute('name')
        checkNameIcon === 'add' ? 
        checkicon[0].setAttribute('name', 'remove')
        :
        checkicon[0].setAttribute('name', 'add')
        if (elementHidden.length !== 0) {
            elementHidden.forEach(item => {
                item.classList.toggle('hidden');
                item.classList.toggle('flex');
            });
        }
    }
    const onLearnMore = (id) => {
        alert('Kunjungi Website Resmi DiPStrategy')
    }
  return (
    <article>
        <ArticleServices dataServices={dataAll.services} onHandleClick={onServiceClick} onLearnMore={onLearnMore} />
        <ArticleWorkflow onLearnMore={onLearnMore} />
        <ArticlePortfolio onCaseStudy={onLearnMore} />
    </article>
  )
}
