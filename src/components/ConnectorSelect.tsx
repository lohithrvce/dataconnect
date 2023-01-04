import React from 'react';

const EXTENSION_CSS_CLASSNAME = 'jl-ReactAppWidget'

export const ConnectorSelect = (): JSX.Element => {

    const list:any = [
        {key:"amazon-s3",value:"Amazon S3"},
        {key:"bigquery",value:"Big Query"},
        {key:"databricks",value:"Databricks"},
        {key:"mysql",value:"MySQL"},
        {key:"oracle",value:"Oracle"},
        {key:"postgres",value:"Postgres"},
        {key:"redshift",value:"Redshift"},
    ]

  return (
    <div className={EXTENSION_CSS_CLASSNAME}>
        <div className="container connector-container">
            <span><p>Select Datasource:</p></span>
        {list && 
            list.map((e:any) => (
                <div className="list-container">
                    <span >{e.value}</span>
                    <span className="text-arrow"><p>{'>'}</p></span>
                </div>
            ))}  

        </div>
            
    </div>
  );
};
