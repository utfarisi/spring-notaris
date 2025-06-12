package edu.ut.kelompokb.notaryapp.dto;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import edu.ut.kelompokb.notaryapp.dto.deeds.DeedDocumentsResponse;
import edu.ut.kelompokb.notaryapp.dto.deeds.StatusHistoryRecord;
import edu.ut.kelompokb.notaryapp.dto.invoices.InvoiceWithoutDeedResponse;
import edu.ut.kelompokb.notaryapp.entities.Deed;
import edu.ut.kelompokb.notaryapp.etc.DeedStatus;

public record DeedCompleteResponse(
        Long id,
        Long customerId,
        String number,
        String deedType,
        String title,
        String description,
        DeedStatus deedStatus,
        LocalDate deedDate,
        Set<DeedDocumentsResponse> deedDocs,
        List<StatusHistoryRecord> statusHistories,
        InvoiceWithoutDeedResponse invoice
        ) {

    public static DeedCompleteResponse fromEntity(Deed deed) {
        Set<DeedDocumentsResponse> deedDocs = deed.getDocuments()
                .stream()
                .map(DeedDocumentsResponse::fromEntity)
                .collect(Collectors.toSet());
        List<StatusHistoryRecord> listShr = deed.getStatusHistories()
                .stream()
                .map(StatusHistoryRecord::fromEntity)
                .toList();

        InvoiceWithoutDeedResponse invoice = deed.getInvoice() == null ? null : InvoiceWithoutDeedResponse.fromEntity(deed.getInvoice());

        return new DeedCompleteResponse(
                deed.getId(),
                deed.getCustomer().getId(),
                deed.getNumber(),
                deed.getDeedType(),
                deed.getTitle(),
                deed.getDescription(),
                deed.getDeed_status(),
                deed.getDeedDate(),
                deedDocs,
                listShr,
                invoice
        );
    }
}
