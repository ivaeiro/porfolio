import React from 'react'
import {Navbar, Footer, ContainerMain, Code} from '../components'

function graylog() {
  return (
    <div>
      <Navbar/>
      <ContainerMain>
        <h1 className="text-2xl text-center font-bold">Monitorizacíon con Graylog en ubuntu 20.04</h1>

        <p>Antes de instalar el Graylog, Elasticsearch y Mongodb, tenemos que ejecutar unos comando previos.</p>
        <Code>sudo apt-get update {'&&'} sudo apt-get upgrade</Code>
        <p>El siguiente comando es para instalar el java.</p>
        <p>Importante! En el comando pone {'<version_number>'} hay que quitar eso y poner la versión de java que quieres instalar.</p>
        <Code>sudo apt-get install apt-transport-https openjdk-{'<version_number>'}-jre-headless uuid-runtime pwgen</Code>
        <p>Si recibe un error que indica No se puede ubicar el paquete , es probable que deba habilitar el repositorio del universo, lo que se puede hacer escribiendo el siguiente comando y los comandos posteriores de la siguiente manera:</p>
        <Code>
        sudo add-apt-repository universe
        sudo apt-get update {'&&'} sudo apt-get upgrade
        sudo apt-get install apt-transport-https openjdk-{'<version_number>'}-jre-headless uuid-runtime pwgen
        </Code>
        <p>Importante! En el comando pone {'<version_number>'} hay que quitar eso y poner la versión de java que quieres instalar.</p>

        <h4 className="text-2xl text-center font-bold p-2">MONGODB</h4>

        <p>El repositorio oficial de MongoDB proporciona la versión más actualizada y es la forma recomendada de instalar MongoDB:</p>
        <Code>
        sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
        {'echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list'}
        sudo apt-get update
        sudo apt-get install -y mongodb-org
        </Code>
        <p>El último paso es habilitar MongoDB durante el inicio del sistema operativo y verificar que se está ejecutando, para ello ejecutaremos los siguientes comandos.</p>
        <Code>
        sudo systemctl daemon-reload
        sudo systemctl enable mongod.service
        sudo systemctl restart mongod.service
        sudo systemctl --type=service --state=active | grep mongod
        </Code>
        <p>Después haremos el siguiente comando para comprobar que esta corriendo el servicio:</p>
        <Code>systemctl status mongodb</Code>

        <h4 className="text-2xl text-center font-bold p-2">ELASTICSEARCH</h4>

        <p>Los siguientes comandos son para la instalación de Elasticsearch:</p>
        <Code>
        wget -q https://artifacts.elastic.co/GPG-KEY-elasticsearch -O myKey
        sudo apt-key add myKey
        {'echo "deb https://artifacts.elastic.co/packages/oss-7.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-7.x.list'}
        {'sudo apt-get update && sudo apt-get install elasticsearch-oss'}
        </Code>
        <p>Modifique el archivo de configuración de Elasticsearch ( /etc/elasticsearch/elasticsearch.yml) y establezca el nombre del clúster en Graylog y elimine el comentario action.auto_create_index: falsepara habilitar la acción:</p>
        <Code>
        {'sudo tee -a /etc/elasticsearch/elasticsearch.yml > /dev/null <<EOT'}
        cluster.name: graylog
        action.auto_create_index: false
        EOT
        </Code>
        <p>Una vez que se haya modificado la configuración, se puede iniciar Elasticsearch y verificar que se esta ejecutando. Para ello hay que hacer los siguiente comandos.</p>
        <Code>
        sudo systemctl daemon-reload
        sudo systemctl enable elasticsearch.service
        sudo systemctl restart elasticsearch.service
        sudo systemctl --type=service --state=active | grep elasticsearch
        </Code>

        <h4 className="text-2xl text-center font-bold p-2">GRAYLOG</h4>
        
        <p>Ahora instalas la configuración del repositorio de Graylog y el propio Graylog con los siguientes comandos:</p>
        <Code>
        wget https://packages.graylog2.org/repo/packages/graylog-4.2-repository_latest.deb
        sudo dpkg -i graylog-4.2-repository_latest.deb
        sudo apt-get update {'&&'} sudo apt-get install graylog-server
        </Code>
        <h6>Edite el archivo de configuración</h6>
        <p>Lea las instrucciones dentro del archivo de configuración y edítelas según sea necesario, ubicadas en /etc/graylog/server/server.conf.Agregar adicionalmente password_secrety root_password_sha2ya que son obligatorias y Graylog no se iniciará sin ellas .</p>
        <p>Puede que ya estén puestos en el archivo, comprobadlo.</p>
        <p>Para crear su root_password_sha2 ejecute el siguiente comando:</p>
        <p>Importante! Donde pone Enter Password, hay que quitar eso y poner ahi la contraseña con la que vas a entrar al graylog.</p>
        <Code>{`echo -n "Enter Password: " && head -1 </dev/stdin | tr -d '\n' | sha256sum | cut -d" " -f1`}</Code>
        <p>El último paso es habilitar Graylog durante el inicio del sistema operativo y verificar que se esté ejecutando.</p>
        <Code>
        sudo systemctl daemon-reload
        sudo systemctl enable graylog-server.service
        sudo systemctl start graylog-server.service
        sudo systemctl --type=service --state=active | grep graylog
        </Code>
        <p>Para que puedas visualizar en el navegador el Graylog, tienes que poner:</p>
        <p>http_bind_address = tu IP:9000</p>
        <p>http_publish_uri = http://[tu IP:9000]/</p>
      </ContainerMain>
      <Footer/>
    </div>
  )
}

export default graylog