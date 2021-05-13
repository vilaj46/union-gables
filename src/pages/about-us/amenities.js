import * as React from "react";
import styled from "styled-components";

// Components
import Header from '../../styledComponents/Header/Header';
import Footer from "../../styledComponents/Footer/Footer";

// Shared Components
import MainPageTitle from "../../styledComponents/Shared/MainPageTitle";
import FontContainer from "../../styledComponents/Shared/FontContainer";
import PageBodyContainer from "../../styledComponents/Shared/PageBodyContainer";
import BottomPadding from "../../styledComponents/Shared/BottomPadding";

import api from "../../api/amenitiesAPI";
import PageParagraph from "../../styledComponents/Shared/PageParagraph";
import PageSubParagraph from "../../styledComponents/Shared/PageSubParagraph";
import PageImages from "../../styledComponents/Shared/PageImages";
import PageImage from "../../styledComponents/Shared/PageImage";
import PageSubTitle from "../../styledComponents/Shared/PageSubTitle";
import PageParagraphLink from "../../styledComponents/Shared/PageParagraphLink";
import HorizontalRule from "../../styledComponents/Shared/HorizontalRule";

const Amenities = () => {
  return (
    <FontContainer>
      <Header />
      <PageBodyContainer>
      <MainPageTitle>{api.title}</MainPageTitle>
        {api.Paragraph1}

        <PageImages images={[api.pool, api.benedict]}/>

        <PageImages images={[api.billiards, api.fireplace]} />

        <PageSubTitle>{api.subTitle1}</PageSubTitle> 

        {api.Paragraph2}
        
        {api.Paragraph3}

        <PageSubTitle>{api.subTitle2}</PageSubTitle> 

        {api.Paragraph4Half}     

        <PageImage src={api.loungechairs} alt="Lounge Chairs" />
        
        <PageImages images={[api.statue, api.pool]}/>

        <PageSubTitle>{api.subTitle3}</PageSubTitle>
        
        {api.Paragraph4}
        
        <PageSubTitle>
          {api.subTitle4}
        </PageSubTitle>

        {api.Paragraph5}

        <PageSubTitle>
          {api.subTitle5}
        </PageSubTitle>

        {api.Paragraph6}

        <PageImages images={[api.garden, api.garden2]}/>

        <PageImages images={[api.porch, api.loungechairs2]} extraBottomPadding={true}/>

        <PageSubTitle>{api.subTitle6}</PageSubTitle>
        
        {api.Paragraph7}

        <PageSubTitle>{api.subTitle7}</PageSubTitle>

        {api.Paragraph8}

        <PageSubTitle>{api.subTitle8}</PageSubTitle>

        {api.Paragraph9}

        <HorizontalRule />

        {api.Paragraph10}
      </PageBodyContainer>
      <BottomPadding />
      <Footer />
      </FontContainer>
  );
};

export default Amenities;
