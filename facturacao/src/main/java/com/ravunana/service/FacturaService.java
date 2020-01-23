package com.ravunana.service;

import com.ravunana.service.dto.FacturaDTO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing {@link com.ravunana.domain.Factura}.
 */
public interface FacturaService {

    /**
     * Save a factura.
     *
     * @param facturaDTO the entity to save.
     * @return the persisted entity.
     */
    FacturaDTO save(FacturaDTO facturaDTO);

    /**
     * Get all the facturas.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<FacturaDTO> findAll(Pageable pageable);


    /**
     * Get the "id" factura.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<FacturaDTO> findOne(Long id);

    /**
     * Delete the "id" factura.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);

    /**
     * Search for the factura corresponding to the query.
     *
     * @param query the query of the search.
     * 
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<FacturaDTO> search(String query, Pageable pageable);
}
