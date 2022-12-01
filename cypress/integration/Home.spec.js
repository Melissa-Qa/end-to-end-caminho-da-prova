


describe('Ulife | Core Website home page', ()=>{
    it('O app deve está online', ()=>{
      cy.visit('https://release.ulife.com.br/login.aspx ')
      cy.get('h3').should('have.text', 'Ulife: sua vida acadêmica\n                    em um só lugar')
      //<br> Não e recomendando que a formatação de texto seja feita com HTML, para poder fazer  manutenções e implementações futuras.
      //A formatação de texto deve ser feita com CSS.
            
    }) 
  })
            
               

         describe('Preechendo o login', () => { 
            it('Preenchendo ocampus  login',()=>{
            cy.get('input[type="text"]')
            .should('be.visible')
            .type('3079625')
            .should('have.value', '3079625')
            })

            describe('Preenchendo o campo senha', () => { 
            it('Preechendo o campus senha',()=>{
            cy.get('input[type="password"]')
            .should('be.visible')
            .type('A493327EC335490A2976C6A46655961D270C16E8DCBC398380CECE9DABC730C984B365D2C3E4E919F331239A376279E5F6FFA3B30A31FCD204EFBD5A80F80A65')
            .should('have.value', 'A493327EC335490A2976C6A46655961D270C16E8DCBC398380CECE9DABC730C984B365D2C3E4E919F331239A376279E5F6FFA3B30A31FCD204EFBD5A80F80A65')
            cy.get('#divLogin > #imbLogin').click() 
        
            })

            describe('clicando no campus- ',() => {
              it('Clicando no campus', ()=>{
              cy.get('.uOrgSelected').click()

              }) 

            })
            describe('selecionando o campus - Unisul - Pedra Branca - 628 ',() => {
              it('Clicando no campus', ()=>{
              cy.get(':nth-child(3) > :nth-child(4) > .ng-binding').click()

              }) 
           }) 

          

        

            
      })
    })
  
            
             


              
   
      
