# donner les droits d'exécution du fichier :
# chmod +x init_db.sh 

# Je prends l'identité de spedata :
export PGUSER=spedata

# Je supprime la BDD cuisto et l'utilisateur admin_cuisto
dropdb chills
echo "BDD supprimée"
dropuser admin_chills
echo "admin_chills supprimé"

# Je crèe la BDD chills et l'utilisateur admin_chills
createuser admin_chills -P
echo "admin_chills créé"
createdb chills -O admin_chills
echo "BDD créée"

# Je supprime sqitch.conf et sqitch.plan
rm sqitch.conf
rm sqitch.plan

# J'initiase Sqitch
sqitch init chills --target db:pg:chills
echo "Sqitch initialisé"

