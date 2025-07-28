
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}
  




window.addEventListener('load', function () {
    setTimeout(function () {
      document.getElementById("loader").style.display = "none";
      document.getElementById("contenido").style.display = "block";
    }, 400); // 3000 milisegundos = 3 segundos
  });


document.addEventListener('DOMContentLoaded', () => {
    const cotizarBtn = document.getElementById('cotizarBtn');
    const cotizacionResultadoDiv = document.getElementById('cotizacion-resultado');
    const closeCotizacionBtn = document.getElementById('closeCotizacionBtn');
    const goodbyeMessageDiv = document.getElementById('goodbye-message');
    const addPackageBtn = document.getElementById('addPackageBtn');
    const packagesContainer = document.getElementById('packages-container');

    const resOrigen = document.getElementById('res-origen');
    const resDestino = document.getElementById('res-destino');
    const resPaquete = document.getElementById('res-paquete');
    const resCosto = document.getElementById('res-costo');

    let packageCount = 1;

    function updatePackageIds(clonedPackageDiv, newIndex) {
        clonedPackageDiv.id = `package-${newIndex}`;
        clonedPackageDiv.querySelector('.package-number').textContent = newIndex;

        clonedPackageDiv.querySelectorAll('input[type="checkbox"]').forEach(input => {
            const oldId = input.id;
        
            const baseId = oldId.replace(/_\d+$/, ''); 
            const newId = `${baseId}_${newIndex}`; 
            input.id = newId;
            input.name = `package_details_${newIndex}`;
            input.checked = false;
        });

        clonedPackageDiv.querySelectorAll('label').forEach(label => {
            const oldFor = label.htmlFor;
            const baseFor = oldFor.replace(/_\d+$/, '');
            const newFor = `${baseFor}_${newIndex}`;
            label.htmlFor = newFor;
        });

        
        const header = clonedPackageDiv.querySelector('.package-header');
        let removeBtn = header.querySelector('.remove-package-button');

        if (newIndex > 1) { 
            if (!removeBtn) { 
                removeBtn = document.createElement('button');
                removeBtn.type = 'button';
                removeBtn.className = 'remove-package-button';
                removeBtn.innerHTML = '<i class="fas fa-trash"></i> Eliminar paquete';
                header.appendChild(removeBtn);
            }
            removeBtn.onclick = () => { 
                clonedPackageDiv.remove();
                updateAllPackageNumbers();
            };
        } else { 
            if (packageCount > 1 && !removeBtn) { 
                removeBtn = document.createElement('button');
                removeBtn.type = 'button';
                removeBtn.className = 'remove-package-button';
                removeBtn.innerHTML = '<i class="fas fa-trash"></i> Eliminar paquete';
                header.appendChild(removeBtn);
                removeBtn.onclick = () => {
                    clonedPackageDiv.remove();
                    updateAllPackageNumbers();
                };
            } else if (packageCount === 1 && removeBtn) { 
                 removeBtn.remove();
            }
        }
    }


    function updateAllPackageNumbers() {
        const allPackages = packagesContainer.querySelectorAll('.package-section');
        packageCount = allPackages.length; 
        allPackages.forEach((pkg, index) => {
            updatePackageIds(pkg, index + 1); 
        });

        if (packageCount === 1) {
            const firstPackageHeader = document.getElementById('package-1').querySelector('.package-header');
            const removeBtn = firstPackageHeader.querySelector('.remove-package-button');
            if (removeBtn) {
                removeBtn.remove();
            }
        }
    }


    addPackageBtn.addEventListener('click', () => {
        const originalPackage = document.getElementById('package-1');
        const clonedPackage = originalPackage.cloneNode(true);

        packageCount++; 
        updatePackageIds(clonedPackage, packageCount); 

        packagesContainer.appendChild(clonedPackage);

        
        if (packageCount === 2) {
            const firstPackageDiv = document.getElementById('package-1');
            const firstPackageHeader = firstPackageDiv.querySelector('.package-header');
            let firstRemoveBtn = firstPackageHeader.querySelector('.remove-package-button');
            if (!firstRemoveBtn) { 
                firstRemoveBtn = document.createElement('button');
                firstRemoveBtn.type = 'button';
                firstRemoveBtn.className = 'remove-package-button';
                firstRemoveBtn.innerHTML = '<i class="fas fa-trash"></i> Eliminar paquete';
                firstPackageHeader.appendChild(firstRemoveBtn);
                firstRemoveBtn.onclick = () => { 
                    firstPackageDiv.remove();
                    updateAllPackageNumbers();
                };
            }
        }
    });

    cotizarBtn.addEventListener('click', () => {
        const origenSelect = document.getElementById('origen_poblado');
        const destinoSelect = document.getElementById('destino_poblado');
        const origen = origenSelect.value;
        const destino = destinoSelect.value;

        let todosTiposPaqueteSeleccionados = [];
        let costoTotalEstimado = 0;

        
        packagesContainer.querySelectorAll('.package-section').forEach((packageDiv, index) => {
            const packageNum = index + 1;
        
            const checkboxesForThisPackage = packageDiv.querySelectorAll(`input[name="package_details_${packageNum}"]:checked`);
            
            let tiposParaEstePaquete = [];
            let costoParaEstePaquete = 0;

            if (checkboxesForThisPackage.length > 0) {
        
                let smallCategoryCosted = false;
                let mediumCategoryCosted = false;
                let largeCategoryCosted = false;

                checkboxesForThisPackage.forEach(checkbox => {
                    tiposParaEstePaquete.push(checkbox.value); 

                
                    if ((checkbox.value.includes('28cm') || checkbox.value === 'Caja Pequeña') && !smallCategoryCosted) {
                        costoParaEstePaquete += 25;
                        smallCategoryCosted = true;
                    } else if ((checkbox.value.includes('36cm') || checkbox.value === 'Caja Mediana') && !mediumCategoryCosted) {
                        costoParaEstePaquete += 50; 
                        mediumCategoryCosted = true;
                    } else if ((checkbox.value.includes('45cm') || checkbox.value === 'Caja Grande') && !largeCategoryCosted) { 
                        costoParaEstePaquete += 90; 
                        largeCategoryCosted = true;
                    }
                });
                todosTiposPaqueteSeleccionados.push(`Paquete ${packageNum}: ${tiposParaEstePaquete.join(' y ')}`);
            } else {
                todosTiposPaqueteSeleccionados.push(`Paquete ${packageNum}: Ninguno seleccionado`);
            }
            costoTotalEstimado += costoParaEstePaquete;
        });

        resOrigen.textContent = origen ? origen : 'No seleccionado';
        resDestino.textContent = destino ? destino : 'No seleccionado';
        resPaquete.textContent = todosTiposPaqueteSeleccionados.length > 0 ? todosTiposPaqueteSeleccionados.join('; ') : 'Ninguno seleccionado';
        resCosto.textContent = 'Q' + costoTotalEstimado.toFixed(2);

        cotizacionResultadoDiv.style.display = 'block';
        goodbyeMessageDiv.style.display = 'none';
        cotizacionResultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    closeCotizacionBtn.addEventListener('click', () => {
        cotizacionResultadoDiv.style.display = 'none';
        goodbyeMessageDiv.style.display = 'block';
        goodbyeMessageDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    updateAllPackageNumbers(); 
});