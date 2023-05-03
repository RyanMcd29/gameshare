export function idbPromise(storeName, method, object) {
    return new Promise ((resolve, reject) => {
        const request = window.indexedDB.open('shop-shop', 1);
        let db, tx, store;
        request.onupgradeneeded = function(e) {
            const db = request.result;
            db.createObjectStore('games', { keyPath: '_id' });
            db.createObjectStore('genres', { keyPath: '_id' });
            db.createObjectStore('platforms', {keyPath: '_id' });
            db.createObjectStore('selectedGames', { keyPath: '_id' });
        };

        request.onerror = function(e) {
            console.log('There was a error');
        }
        
        request.onsuccess = function(e) {
            db = request.result;
            tx = db.transaction(storeName, 'readwrite');
            store = tx.objectStore(storeName);

            db.onerror = function(e) {
                console.log('error', e);
            };

            // eslint-disable-next-line default-case
            switch (method) {
                case 'put':
                    store.put(object);
                    resolve(object)
                    break;
                case 'get':
                    const all = store.getAll();
                    all.onsuccess = function() {
                        resolve(all.result);
                    };
                    break;
                case 'delete':
                    store.delete(object._id);
                    break;
            }

            tx.oncomplete = function() {
                db.close();
            };
        };
    })
}