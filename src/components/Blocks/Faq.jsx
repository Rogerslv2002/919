import Arccord from "../ui/arccord";
import List from "../ui/LIst";
import List2 from "../ui/List2";



export default function Faq(){
    return(
        <>
        <Arccord Titulo={'Quais são os benefícios de optar por um site One Page para a minha empresa?'}>
            <h3 className=" text-black font-semibold text-lg ">
         Optar por um site One Page para sua empresa oferece diversos benefícios:<br/><br/>

            </h3>
        <ul className=" list-disc pl-5 text-black font-medium">
            
                <li>
                Simplicidade e Eficiência: Um único local para todo o conteúdo, proporcionando uma experiência de navegação direta.
                </li>
                <li>
                Design Moderno e Atraente: Seções bem definidas e conectadas, criando um visual moderno e atraente.
                </li>
                <li>
                Leveza e Dinamismo: Sendo um site único, é leve e dinâmico, proporcionando uma navegação suave.
                </li>
                <li>
                Performance Excelente: Especialmente eficiente em dispositivos móveis, garantindo uma experiência rápida e eficaz.
                </li>

        </ul>

        </Arccord>
        <Arccord Titulo={'Meu site aparecerá no Google?'}>
          <h3 className="  text-black  font-semibold text-lg">
          Sim, está incluso em nosso trabalho de desenvolvimento de sites cadastrar seu site no Google e otimizar ele de acordo com as boas práticas de SEO.
          </h3><br/>
          <p className=" text-black font-medium">
          Para sites sob medida, cadastramos o seu site no Google Search Console para garantir que seja indexado corretamente e comece a posicionar para as palavras-chave do seu negócio.

          </p>
        </Arccord>
        <Arccord 
         Titulo={'Qual é a garantia de segurança ao contratar a 99system?         '}
        >
          <h3 className="  text-black  font-semibold text-lg">
          Antes de começar o desenvolvimento da sua solução, a 99system fornece um contrato digital.
          </h3><br/>
          <p className=" text-black font-medium">
          Este documento inclui informações detalhadas sobre prazos, custos, direitos e responsabilidades relacionados ao serviço de criação de sites. Essa prática não apenas garante transparência em nossas operações, mas também confere validade jurídica ao processo, proporcionando a você uma garantia sólida de segurança ao contratar nossos serviços.
          </p>

        </Arccord>
        <Arccord Titulo={'Quais tipos de sistema e aplicações a 99system desenvolve?'}>
        <h3 className="  text-black  font-semibold text-xl">
             Somos uma empresa especializada na criação de uma variedade de soluções, desde websites simples até sistemas complexos.
          </h3><br/>
           <p className=" text-black font-medium">
          Este documento inclui informações detalhadas sobre prazos, custos, direitos e responsabilidades relacionados ao serviço de criação de sites. Essa prática não apenas garante transparência em nossas operações, mas também confere validade jurídica ao processo, proporcionando a você uma garantia sólida de segurança ao contratar nossos serviços.
          </p>
          <span className=" flex flex-col gap-2 pt-3">

           <List
            Titulo={'Desenvolvemos uma ampla gama de websites, cada um adaptado às necessidades específicas dos nossos clientes. Alguns dos tipos mais populares incluem:'}
             Item={'Websites com landing pages, projetados para capturar a atenção e converter visitantes em leads.'}  
             Item2={'Sites institucionais, que oferecem uma apresentação sólida da empresa, seus produtos e serviços.'}
             Item3={'Portais de notícias, ideais para fornecer atualizações regulares e conteúdo relevante para o público-alvo.'}
             Item4={'E-commerce, para empresas que buscam vender produtos ou serviços online de forma eficiente e segura.'}
             Item5={'Blogs, excelentes para compartilhar conhecimento, notícias e perspectivas sobre diversos temas.'}
              Item6={'Portfólios, destinados a exibir o trabalho e as realizações de profissionais criativos, como designers, fotógrafos e artistas.'}
            />
            <List2
            Titulo={'Desenvolvemos uma variedade de sistemas personalizados, incluindo: '}
            Item='Sistema de gestão de clientes, projetado para acompanhar informações importantes sobre clientes, suas preferências e histórico de interações.'
            Item2='Sistema de gerenciamento escolar, para administrar eficientemente as atividades acadêmicas, financeiras e administrativas de uma instituição de ensino.'
            Item3={'Sistema de gestão de propriedades imobiliárias, para gerenciar informações sobre propriedades, contratos de aluguel, manutenção e pagamentos.'}
            Item4={'Sistema de agendamento médico, que facilita o agendamento de consultas, o acompanhamento de pacientes e o gerenciamento de registros médicos.'}
            Item5={'Sistema de gestão de frota, para monitorar e controlar a frota de veículos de uma empresa, incluindo manutenção, rastreamento e alocação de recursos.'}
            />
            </span>

         
        
        </Arccord>
        <Arccord Titulo={'É possível hospedar minhas aplicações  em um servidor de hospedagem que não seja o da 99system?'}>
        <h3 className="  text-black  font-semibold text-lg">
        Para o site expresso, o site é hospedado em nossos servidores, utilizando o servidor da Locaweb ou hostinger  para máxima performance e velocidade.
          </h3><br/>
          <p className=" text-black font-medium">
          Se optar por um sistema ou aplicação sob medida, oferecemos flexibilidade na escolha do servidor de hospedagem: pode ser o nosso ou um de sua preferência. Entretanto, recomendamos nossa hospedagem durante o primeiro ano para aproveitar nosso suporte constante, dado o aprendizado contínuo. Acreditamos que a qualidade do servidor de hospedagem desempenha um papel fundamental no sucesso do seu site.
          </p>

        </Arccord>

        </>
    )
}