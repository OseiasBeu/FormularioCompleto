from app import app

#Importando Rotas
from app.routes import *

#Importando Models
from app.models import endereco
from app.models import usuario


if __name__ == '__main__':
    app.run(port=8080, debug=True)

